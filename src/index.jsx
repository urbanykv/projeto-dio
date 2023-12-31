import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyleGlobal } from './styles/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleGlobal />
    <App />
  </React.StrictMode>
);
