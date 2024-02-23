import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './Cart/CartProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>
);
