import React from "react";
import ImageHelper from "../../helpers/ImageHelper";
import "./Product.css";
import { useBasket } from "../../contexts/BasketContext";

export default function Product({ product }) {
  const {
    id,
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

  const { addProductToBasket } = useBasket();
  return (
    <div className="product-box">
      <ImageHelper product={product} />
      <div className="product-details">
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <span className={promotion ? "price-on-promotion" : ""}>{price}</span>
          {promotion && <span>{promotionPrice}</span>}
          <button onClick={() => addProductToBasket(id)}>Adauga in cos</button>
        </div>
      </div>
    </div>
  );
}
