import { createRoot } from 'react-dom/client';
import React from 'react';
import './style.css';
import App from './src/App';

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
