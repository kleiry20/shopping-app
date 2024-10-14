import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

// this is like a store which track states and function that needs to be accessed globally in the project
// with ShopContext, we can access and modify the states on different components
export const ShopContext = createContext(null);

// function to initialize cart: every product with 0 items in the cart
const getDefaultCart = () => {
  const cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// we define all the states and everything related to logic (add, remove from cart) here
// and then pass it to the Provider
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // function: add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // function: remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // decide what to pass to the Provider here (optional) OR directly pass them into the value prop
  const contextValue = { cartItems, addToCart, removeFromCart };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
