import { useContext, useEffect } from "react";
import ProductContext from "../../_context/ProductContext";

function CategoryFilter() {
  const { categories, toggleAllFilteredCategories, toggleFilteredCategory } =
    useContext(ProductContext);

  return (
    <form className="flex flex-col gap-4 ">
      <span className="font-medium text-gray-900 text-lg">Categories</span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => toggleAllFilteredCategories(true)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Show all
        </button>
        <button
          type="button"
          onClick={() => toggleAllFilteredCategories(false)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Hide all
        </button>
      </div>
      <div className="overflow-y-scroll h-40">
        {categories.map(({ title, show }) => (
          <label key={title} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={title}
              checked={show}
              onChange={() => toggleFilteredCategory(title)}
            />
            <span className="capitalize">{title}</span>
          </label>
        ))}
      </div>
    </form>
  );
}

export default CategoryFilter;
