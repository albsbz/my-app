import ProductContext from "@/app/_context/ProductContext";
import { useContext } from "react";

function SortBlock() {
  const { setSort } = useContext(ProductContext);
  return (
    <div >
      <span className="mr-2 font-medium text-gray-900 text-lg">Sort by:</span>
      <select
        className="mb-4 p-2 w-full border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
    </div>
  );
}

export default SortBlock;
