import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Item } from './styles';

export default function BoxPokemon({ pokemon }) {
  let { id } = pokemon;
  if (!id) {
    const partials = pokemon.url.split('/');
    id = partials[partials.length - 2];
  }

  return (
    <Item>
      <Link to={`/details/${pokemon.name}`}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/${id}.png`}
          alt={pokemon.name}
        />
        <h3>{pokemon.name}</h3>
      </Link>
    </Item>
  );
}

BoxPokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
};
