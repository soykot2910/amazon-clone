import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product-info">
        <p>
          The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback
        </p>
        <small>$</small>
        <strong>19.90</strong>
        <p>🌟🌟🌟🌟</p>
      </div>
      <img
      className="product-img"
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
