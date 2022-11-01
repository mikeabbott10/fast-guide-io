import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CtxProvider} from './contexts/Ctx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CtxProvider>
      <App/>
    </CtxProvider>
  </React.StrictMode>
);
