import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import $getById from './helpers/dom_selectors';

import './index.css';

const root = ReactDOM.createRoot($getById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
