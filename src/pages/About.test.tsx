import React from 'react';
import userEvent from '@testing-library/user-event';
import { render,screen,fireEvent} from '../../test/test-utils';

import About from './About';

it('renders <About /> page', () => {
  render(<About/>);
  expect(screen.getByText(/About Page/i)).toBeTruthy();
  // You should be able to verify the About page rendered correctly.
});

it('clicks button and fires increment counter', () => {
  render(<About/>);
  fireEvent.click(screen.getByText('Increment'))
  expect(screen.getByText(/1/i)).toBeTruthy();
  // You should be able to click the increment button and verify the count.
});
