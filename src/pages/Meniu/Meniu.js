import MenuToolbar from "../../components/MenuToolbar/MenuToolbar";

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

  return (
    <div className="menu-container">
      <MenuToolbar categories={categories} />;
    </div>
  );
}
