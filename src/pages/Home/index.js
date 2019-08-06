import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Container from '../../components/Container';
import Header from '../../components/Header';
import BoxPokemon from '../../components/BoxPokemon';

import { List, Formulario } from './styles';
import Footer from '../../components/Footer';

export default function Home() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [nextEndpoint, setNextEndpoint] = useState('');

  useEffect(() => {
    async function fetch() {
      const response = await api.get('pokemon', { params: { limit: 21 } });
      setPokemonList(response.data.results);
      setNextEndpoint(response.data.next);
    }

    fetch();
  }, []);

  async function handleSearch() {
    try {
      const response = await api.get(`/pokemon/${pokemon}`);

      const { id, name } = response.data;

      const list = [
        {
          id,
          name,
        },
      ];

      setPokemonList(list);
      setNextEndpoint('');
    } catch (e) {
      toast.error(`Pokémon ${pokemon} not found`);
    }
  }

  const handleLoadMore = useCallback(async () => {
    const response = await api.get(nextEndpoint);
    setPokemonList([...pokemonList, ...response.data.results]);
    setNextEndpoint(response.data.next);
  }, [nextEndpoint, pokemonList]);

  return (
    <Container>
      <Header />

      <Formulario onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter pokemon number or name"
          value={pokemon}
          onChange={({ target }) => setPokemon(target.value.toLowerCase())}
          onKeyUp={({ keyCode }) => keyCode === 13 && handleSearch()}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </Formulario>

      <List>
        {pokemonList.map(item => (
          <BoxPokemon key={item.name} pokemon={item} />
        ))}
      </List>

      {nextEndpoint && (
        <button type="button" className="btn" onClick={handleLoadMore}>
          Load more
        </button>
      )}
      <Footer />
    </Container>
  );
}
