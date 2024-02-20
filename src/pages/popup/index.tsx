import React from 'react';
import { createRoot } from 'react-dom/client';
import { Popup } from './Popup';
import '@src/index.css';

function init() {
  const rootContainer = document.querySelector('#root-container');
  if (!rootContainer) {
    throw new Error('Cannot find #root-container');
  }
  const root = createRoot(rootContainer);
  root.render(<Popup />);
}

init();
