import React from "react";
import "./BasketProduct.css";
import { useProduct } from "../../contexts/ProductContext";
export default function BasketProduct({ product }) {
  const allProductsWithDetails = useProduct();
  const basketProducts = allProductsWithDetails.filter(
    (prod) => prod.id === product
  );
  console.log(basketProducts);
  return (
    <div className="basket-product">
      <div>
        <span style={{ fontWeight: "bold" }}>{basketProducts.title}</span>
        <span> {basketProducts.price}</span>
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
