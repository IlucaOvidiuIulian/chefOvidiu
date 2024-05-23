import "./MenuToolbar.css";
export default function MenuToolbar({ categories, onCategorySelect }) {
  return (
    <div className="menu-toolbar">
      <div className="toolbar-wrapper">
        <button
          className="category-selector"
          onClick={() => onCategorySelect("All")}
        >
          All
        </button>
        {categories.map((category, i) => {
          return (
            <button
              key={i}
              className="category-selector"
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
