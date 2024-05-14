import { useContext, useState } from "react";
import "./Meniu.css";
import MenuToolbar from "../../components/MenuToolbar/MenuToolbar";
import { ProductContext } from "../../contexts/ProductContext";
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
  let products = useContext(ProductContext);
  let [filteredProducts, setFilteredProducts] = useState([]);

  const handleProductsFilter = (category) => {
    setFilteredProducts();
  };

  return (
    <div className="menu-container">
      <MenuToolbar categories={categories} />
      <MenuList products={products} />
    </div>
  );
}
