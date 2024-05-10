// NewProductsSlider.js
import React, { useState } from "react";
import "./NewProductsSlider.css";
import ImageHelper from "../../helpers/ImageHelper";

const NewProductsSlider = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 5; // Number of products to show at a time

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

  return (
    <div className="slider">
      <button onClick={handleClickPrev}>Previous</button>
      <div className="slides-container">
        {products.slice(startIndex, startIndex + itemsToShow).map((product) => (
          <div key={product.id} className="slide">
            <ImageHelper b product={product} />

            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
};

export default NewProductsSlider;
