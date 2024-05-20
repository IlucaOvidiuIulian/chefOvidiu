import React, { useState } from "react";
import "./NewProductsSlider.css";
import ImageHelper from "../../helpers/ImageHelper";

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
  const lastMonth = new Date(
    now.getFullYear(),
    now.getMonth() - 1,
    now.getDate()
  );

  const newProducts = products.filter((product) => {
    const productDate = new Date(product.date);
    return (
      product.category !== "Bauturi" &&
      productDate >= lastMonth &&
      productDate <= now
    );
  });

  const endIndex = (startIndex + itemsToShow) % newProducts.length;
  const displayedProducts =
    startIndex < endIndex
      ? newProducts.slice(startIndex, endIndex)
      : newProducts.slice(startIndex).concat(newProducts.slice(0, endIndex));

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
            <div>
              <span className={product.promotion ? "price-on-promotion" : ""}>
                {product.price}
              </span>
              {product.promotion && <span>{product.promotionPrice}</span>}
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
