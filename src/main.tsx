import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'virtual:svg-icons-register';
import 'nes.css/css/nes.min.css';

import App from './application';

import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
