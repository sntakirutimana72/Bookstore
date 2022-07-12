import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import $getById from './helpers/dom_selectors';
import store from './redux';

import './index.css';

const root = ReactDOM.createRoot($getById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
