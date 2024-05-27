import React from "react";
import "./BasketProduct.css";

export default function BasketProduct({
  product,
  removeProductFromBasket,
  addProductToBasket,
  removeOneProductFromBasket,
  setFlagChangeBasket,
}) {
  return (
    <div className="basket-product">
      <div>
        <span style={{ fontWeight: "bold" }}>{product.title}</span>
        <span>
          {" "}
          {(product.price * product.numberOfProducts).toFixed(2)} Lei
        </span>
      </div>
      <div className="product-quantifier">
        <button onClick={() => removeOneProductFromBasket(product.id)}>
          -
        </button>
        <span className="basket-prod-quantity">{product.numberOfProducts}</span>
        <button onClick={() => addProductToBasket(product.id)}>+</button>
        <button
          onClick={() => removeProductFromBasket(product.id)}
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
