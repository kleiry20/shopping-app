import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p className="productName">
          <strong>{productName}</strong>
        </p>
        <p className="price">$ {price}</p>
        <div className="countHandler">
          <button className="countBtns" onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="countBtns" onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
