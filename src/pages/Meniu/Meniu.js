import { useContext } from "react";
import MenuToolbar from "../../components/MenuToolbar/MenuToolbar";
import { ProductContext } from "../../contexts/ProductContext";
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
  const products = useContext(ProductContext);
  console.log(products);
  return (
    <div className="menu-container">
      <MenuToolbar categories={categories} />;
    </div>
  );
}
