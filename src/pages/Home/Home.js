import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import img1 from "../../assets/hero/carousel-image-1.jpg";
import img2 from "../../assets/hero/carousel-image-2.jpg";
import img3 from "../../assets/hero/carousel-image-3.jpg";
import NewProductsSlider from "../../components/NewProductsSlider/NewProductsSlider";
import { useProduct } from "../../contexts/ProductContext";

const carouselImages = [img1, img2, img3];
export default function Home() {
  let { products } = useProduct();

  return (
    <div className="home-page">
      <Carousel imageUrls={carouselImages} />
      <h1>Incearca noile preparate</h1>
      <NewProductsSlider products={products} />
    </div>
  );
}
