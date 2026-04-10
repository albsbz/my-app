import { useContext } from "react";
import ProductContext from "../../context/ProductContext";

function CategoryFilter() {
  const { categories, toggleAllCategories, toggleCategory } =
    useContext(ProductContext);

  return (
    <form className="flex flex-col gap-4">
      <span className="font-medium text-gray-900 text-lg">Categories</span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => toggleAllCategories(true)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Show all
        </button>
        <button
          type="button"
          onClick={() => toggleAllCategories(false)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Hide all
        </button>
      </div>
      {categories.map(({ title, show }) => (
        <label key={title} className="flex items-center gap-2">
          <input
            type="checkbox"
            value={title}
            checked={show}
            onChange={() => toggleCategory(title)}
          />
          {title}
        </label>
      ))}
    </form>
  );
}

export default CategoryFilter;
