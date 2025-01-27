import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
