import { use } from "react";
import ProductContext from "../../_context/ProductContext";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

function FavoriteProductIcon({ product }) {
  const { toggleFavoriteProduct, isFavoriteProduct } = use(ProductContext);

  return (
    <button
      className="absolute top-2 right-2 text-sm font-semibold text-gray-700 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer group/favorite"
      onClick={() => toggleFavoriteProduct(product)}
    >
      {isFavoriteProduct(product) ? (
        <HeartIcon className="block group-hover/favorite:hidden text-red-500" />
      ) : (
        <HeartIconOutline className="block group-hover/favorite:hidden" />
      )}
      <HeartIcon
        className={`hidden group-hover/favorite:block ${isFavoriteProduct(product) ? "text-red-500" : "text-gray-700"}`}
      />
    </button>
  );
}

export default FavoriteProductIcon;
