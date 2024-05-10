import React from "react";

export default function Product({ product }) {
  const {
    title,
    category,
    price,
    description,
    date,
    promotion,
    promotionPrice,
    availability,
    alergeni,
    b,
  } = product;
  return (
    <div className="product-box">
      <div className="product-image"></div>
      <div className="product-details">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <p>{price} RON</p>
      </div>
    </div>
  );
}
