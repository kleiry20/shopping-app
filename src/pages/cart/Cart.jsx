import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
      ) : (
        <h1>Oops! Your Cart is Empty</h1>
      )}
    </div>
  );
};
