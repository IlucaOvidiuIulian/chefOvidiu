import "./MenuToolbar.css";
export default function MenuToolbar({ categories }) {
  return (
    <div className="menu-toolbar">
      <div className="toolbar-wrapper">
        {categories.map((category, i) => {
          return (
            <button key={i} className="category-selector">
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
