import "./MenuToolbar.css";
export default function MenuToolbar({ categories }) {
  return (
    <div className="menu-toolbar">
      {categories.map((category, i) => {
        return <button className="category-selector">{category}</button>;
      })}
    </div>
  );
}
