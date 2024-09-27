import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter basename="/vanilla-app-template">
    
      <App />
    </BrowserRouter>
  /* </React.StrictMode> */
);