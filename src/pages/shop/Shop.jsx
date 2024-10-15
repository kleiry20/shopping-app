import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./Shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Finds - Shopping App</h1>
        <p
          className="bestsellers"
          style={{
            textAlign: "center",
            margin: "3rem 0 2rem 0",
            fontWeight: "400",
          }}
        >
          Bestsellers
        </p>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
