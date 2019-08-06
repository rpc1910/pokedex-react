import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from '~/pages/Home';

describe('Home page', () => {
  it('should show header component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(getByTestId('header')).toBeTruthy();
  });

  it('should show footer component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(getByTestId('footer')).toBeTruthy();
  });
});
