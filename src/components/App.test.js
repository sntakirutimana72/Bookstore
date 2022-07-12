import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from '../redux';

test('renders app heading', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkEl = screen.getByRole('link', { name: 'BOOKS' });
  expect(linkEl).toBeInTheDocument();
});
