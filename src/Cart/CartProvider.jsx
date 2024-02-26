import React, { useState, useEffect } from "react";

const CartContext = React.createContext();

function CartProvider({ children }) {
  // State to hold the array of items in the cart, initialized from localStorage or as an empty array
  const [cartArr, setCartArr] = useState(
    JSON.parse(localStorage.getItem("cartArr")) || []
  );

  // Effect to update localStorage whenever cartArr changes
  useEffect(() => {
    localStorage.setItem("cartArr", JSON.stringify(cartArr));
  }, [cartArr]);

  // Function to add a specified number of a certain item to the cart
  const addToCart = (slug, count) => {
    // Create an array with 'count' number of 'slug' items and concatenate it to the cartArr
    const newCartArr = Array.from({ length: count }, () => slug);
    setCartArr(prevState => [...prevState, ...newCartArr]);
  };

  // Function to add a single item to the cart
  const addItem = (slug) => {
    // Add the 'slug' item to the cartArr
    setCartArr(prevState => [...prevState, slug]);
  };

  // Function to remove a single item from the cart
  const removeItem = (slug) => {
    // Filter out the 'slug' item from the cartArr
    setCartArr(prevState => prevState.filter(item => item !== slug));
  };

  // Function to remove all items from the cart
  const removeCartItems = () => {
    // Reset the cartArr to an empty array
    setCartArr([]);
  };

  // Provide cart-related data and functions to the child components via context
  return (
    <CartContext.Provider
      value={{ cartArr, addToCart, removeCartItems, addItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
