import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import img1 from "../../assets/hero/carousel-image-1.jpg";
import img2 from "../../assets/hero/carousel-image-2.jpg";
import img3 from "../../assets/hero/carousel-image-3.jpg";

const carouselImages = [img1, img2, img3];
export default function Home() {
  return (
    <div>
      <Carousel imageUrls={carouselImages} />
    </div>
  );
}
