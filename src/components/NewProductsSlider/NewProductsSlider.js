import React, { useState } from "react";
import "./NewProductsSlider.css";
import ImageHelper from "../../helpers/ImageHelper";
import { useBasket } from "../../contexts/BasketContext";

const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="var(--primary)"
  >
    <path d="M14 3l-9 9 9 9V3z" />
  </svg>
);

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="var(--primary)"
  >
    <path d="M10 3l9 9-9 9V3z" />
  </svg>
);

const NewProductsSlider = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;

  const handleClickPrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - itemsToShow
    );
  };

  const handleClickNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex < products.length - itemsToShow ? prevIndex + 1 : 0
    );
  };

  const now = new Date();
  const twoWeeksAgo = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 14
  );

  const newProducts = products.filter((product) => {
    const productDate = new Date(product.date);
    return productDate >= twoWeeksAgo && productDate <= now;
  });

  const displayedProducts = [];
  for (let i = 0; i < itemsToShow; i++) {
    const index = (startIndex + i) % newProducts.length;
    displayedProducts.push(newProducts[index]);
  }

  const { addProductToBasket } = useBasket();

  return (
    <div className="slider">
      <button onClick={handleClickPrev}>
        <LeftArrowIcon />
      </button>
      <hr className="design-line" />
      <div className="slides-container">
        {displayedProducts.map((product) => (
          <div key={product.id} className="slide">
            <ImageHelper product={product} />
            <h6>{product.title}</h6>
            <div className="new-product-slider-product-slider">
              <span className={product.promotion ? "price-on-promotion" : ""}>
                {product.price}
              </span>
              {product.promotion && <span>{product.promotionPrice}</span>}
            </div>
            <div>
              <button onClick={() => addProductToBasket(product.id)}>
                Adauga in cos
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr className="design-line" />
      <button onClick={handleClickNext}>
        <RightArrowIcon />
      </button>
    </div>
  );
};

export default NewProductsSlider;
