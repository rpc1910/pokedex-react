import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import BoxPokemon from '~/components/BoxPokemon';

const pokemon = {
  name: 'pikachu',
  id: 35,
};

describe('Box Pokemon component', () => {
  it('should show pokemon box', () => {
    const { getByText } = render(
      <MemoryRouter>
        <BoxPokemon pokemon={pokemon} />
      </MemoryRouter>
    );

    expect(getByText(pokemon.name)).toBeTruthy();
  });
});
