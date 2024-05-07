import useFetch from "../../hooks/useFetch";
import MenuToolbar from "../../components/MenuToolbar/MenuToolbar";

export default function Meniu() {
  const {
    data: products,
    error,
    isPending,
  } = useFetch("http://localhost:4000/products");

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

  return (
    <div className="menu-container">
      <MenuToolbar categories={categories} />;
    </div>
  );
}
