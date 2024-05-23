import { useState } from "react";
import "./Meniu.css";
import MenuToolbar from "../../components/MenuToolbar/MenuToolbar";
import { useProduct } from "../../contexts/ProductContext";
import MenuList from "../../components/MenuList/MenuList";
export default function Meniu() {
  const categories = [
    "Pizza",
    "Paste",
    "Burgeri",
    "Ciorbe",
    "Preparate",
    "Garnituri",
    "Mic dejun",
    "Bauturi",
    "Deserturi",
  ];
  let { products } = useProduct();
  let [filteredProducts, setFilteredProducts] = useState(products);

  const handleProductsFilter = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
  };

  return (
    <div className="menu-container">
      <MenuToolbar
        categories={categories}
        onCategorySelect={handleProductsFilter}
      />
      <MenuList products={filteredProducts} />
    </div>
  );
}
