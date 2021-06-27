import React from 'react';
import { render,screen} from '../../test/test-utils';
import userEvent from '@testing-library/user-event'
import LayoutContainer from './LayoutContainer';

it('can browse to the about page', async () => {
 render(<LayoutContainer />);
  expect(screen.getByTestId('layout-container')).toBeTruthy();
  expect(screen.getByText(/Go to about/i)).toBeTruthy();
  userEvent.click(screen.getByText(/Go to about/i));
});
