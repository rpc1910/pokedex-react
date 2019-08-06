import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-pokemon.svg';

export default function Header() {
  return (
    <header data-testid="header">
      <Link to="/">
        <img src={logo} alt="Pokedex" />
      </Link>
    </header>
  );
}
