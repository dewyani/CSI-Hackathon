import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Get the root element from the document
const rootElement = document.getElementById('root');

// Create a root and render the application
// const root = ReactDOM.createRoot(rootElement);

// Use the root to render your React application
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
