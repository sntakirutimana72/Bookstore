import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app heading', () => {
  render(<App />);
  const linkEl = screen.getByRole('link', { name: 'BOOKS' });
  expect(linkEl).toBeInTheDocument();
});
