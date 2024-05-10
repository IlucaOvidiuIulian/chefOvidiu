import React from "react";
import ImageHelper from "../../helpers/ImageHelper";
import "./Product.css";

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
  } = product;
  const promotionPrice1 = parseFloat(product["promotion-price"]);
  return (
    <div className="product-box">
      <div className="product-image">
        <ImageHelper product={product} />
      </div>
      <div className="product-details">
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          {promotion ? <strike>{price}</strike> : <span>{price}</span>}

          <span>{promotion && <span>{promotionPrice}</span>}</span>
          <span>RON</span>
        </div>
      </div>
    </div>
  );
}
