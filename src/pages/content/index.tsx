import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import '@src/index.css';
import './index.css';

const root = document.createElement('div');
root.id = 'website-bundler';

document.body.appendChild(root);

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
