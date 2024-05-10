import React from "react";
import "./BasketProduct.css";
export default function BasketProduct({ product }) {
  console.log(product);
  return (
    <div className="basket-product">
      <div>
        <span style={{ fontWeight: "bold" }}>Product title</span>
        <span> Price</span>
      </div>
      <div className="product-quantifier">
        <button>-</button>
        <span className="basket-prod-quantity">0</span>
        <button>+</button>
        <button
          style={{
            background: "var(--wild)",
            color: "var(--primary)",
            fontSize: "1.5rem",
            paddingBottom: "0.5rem",
            marginLeft: "0.5rem",
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
