// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unused-vars

import { screen } from '@testing-library/react';
import App from './App';
import { render } from './test-utils';

test('renders app works text', () => {
  render(<App />);
  const linkElement = screen.getByText(/App Works!/i);
  expect(linkElement).toBeInTheDocument();
});
