// Carousel.js
import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";

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
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) =>
        index === imageUrls.length - 1 ? 0 : index + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [imageUrls.length]);

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
        <div className="carousel-overlay">
          <div>
            <h1>Livram gratuit</h1>
            <h1>NON STOP</h1>
          </div>
          <Link to="/meniu">COMANDA</Link>
        </div>
      </div>
      {/* <button
        className="img-slider-btn"
        style={{ left: 0 }}
        onClick={showPrev}
      ></button> */}
      {/* <button
        className="img-slider-btn"
        style={{ right: 0 }}
        onClick={showNext}
      ></button> */}
      <div className="slider-btns">
        {imageUrls.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setImageIndex(index)}
              style={{
                color: index === imageIndex ? "var(--wild)" : "var(--primary)",
              }}
            >
              -
            </button>
          );
        })}
      </div>
    </div>
  );
}
