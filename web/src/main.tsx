import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// We'll use the new ReactDOM.createRoot() API introduced in React 18
const root = ReactDOM.createRoot(document.getElementById('root')!); // Non-null assertion

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
