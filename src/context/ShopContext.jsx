import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

// this is like a store which track states and function that needs to be accessed globally in the project
// with ShopContext, we can access and modify the states on different components
export const ShopContext = createContext(null);

// function to initialize cart: every product id with 0 items in the cart
// { id: 0 }
// for example = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0}
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

  // function: to update the cart item's value manually by typing
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // function: to calculate the subtotal of the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // for syntax: iterating an object
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  // decide what to pass to the Provider here (optional) OR directly pass them into the value prop
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount
  };

  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
