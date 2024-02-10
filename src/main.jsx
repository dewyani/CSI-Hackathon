import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

<<<<<<< HEAD
// Get the root element from the document
const rootElement = document.getElementById('root');

// Create a root and render the application
// const root = ReactDOM.createRoot(rootElement);

// Use the root to render your React application
root.render(
=======
ReactDOM.createRoot(document.getElementById('root')).render(
>>>>>>> e37aeed06a7f14c8ee55fcf848a9c89966a5496e
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
