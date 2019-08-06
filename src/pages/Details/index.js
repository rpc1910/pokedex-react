import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { PokemonPage } from './styles';

export default function Details({ match }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetch() {
      try {
        const { slug } = match.params;
        const response = await api.get(`pokemon/${slug}`);
        setPokemon(response.data);
      } catch (e) {
        toast.error('Pokémon not found');
      }
    }

    fetch();
  }, [match.params]);

  return (
    <Container>
      <Header />
      {pokemon && (
        <PokemonPage>
          <h1>{pokemon.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
          />

          <table>
            <thead>
              <tr>
                <th colSpan="2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Height</td>
                <td>{pokemon.height}</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{pokemon.weight}</td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th colSpan="2">Stats</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats &&
                pokemon.stats.map(stat => (
                  <tr key={stat.stat.name}>
                    <td>{stat.stat.name}</td>
                    <td>{stat.base_stat}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </PokemonPage>
      )}
      <Footer />
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
