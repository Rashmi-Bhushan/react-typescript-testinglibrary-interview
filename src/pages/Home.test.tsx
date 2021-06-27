import React from 'react';
import {screen, render } from '../../test/test-utils';

import Home from './Home';

it('renders <Home /> page', () => {
  render(<Home/>)
  expect(screen.getByText(/Welcome/i)).toBeTruthy();
  // You should be able to show that you can verify Home rendered correctly
});
