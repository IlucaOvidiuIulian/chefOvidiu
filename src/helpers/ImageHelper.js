import React from "react";

const ImageHelper = ({ product }) => {
  const images = require.context("../assets/imgProduse", true);
  const imageList = images.keys().map((image) => images(image));
  const index = imageList.findIndex((image) => image.includes(product.title));

  return <img src={imageList[index]} alt={product.title} />;
};

export default ImageHelper;
