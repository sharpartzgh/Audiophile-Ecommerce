import React, { createContext, useState } from 'react';

// Create a new context
export const CartContext = createContext();

// Create a CartProvider component to wrap your application with
export const CartProvider = ({ children }) => {
  // State to manage the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems(prevItems => [...prevItems, itemId]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item !== itemId));
  };

  // Function to clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Value object to be provided by the context
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
