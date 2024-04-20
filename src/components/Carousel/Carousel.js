// Carousel.js
import React, { useState } from "react";
import "./Carousel.css";
import { ReactComponent as SliderBtn } from "../../assets/others/minus-svgrepo-com.svg";

export default function Carousel({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);
  const showNext = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };
  const showPrev = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {imageUrls.map((url) => {
          return (
            <img
              style={{ translate: `${-100 * imageIndex}%` }}
              key={url}
              src={url}
              alt={`Carousel template ${imageIndex}`}
            />
          );
        })}
      </div>
      <button className="img-slider-btn" style={{ left: 0 }} onClick={showPrev}>
        ..
      </button>
      <button
        className="img-slider-btn"
        style={{ right: 0 }}
        onClick={showNext}
      >
        ..
      </button>
      <div className="slider-btns">
        {imageUrls.map((_, index) => {
          return (
            <button key={index} onClick={() => setImageIndex(index)}>
              <SliderBtn />
            </button>
          );
        })}
      </div>
    </div>
  );
}
