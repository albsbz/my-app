import useCart from "../../_hooks/useCart";

import FavoriteProductIcon from "./FavoriteProductIcon";
import Link from "next/link";

function ProductListItem({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="relative">
      <Link href={`/product/${product.id}`} className="group/product">
        <img
          alt={product.title}
          src={product.images[0]}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover/product:opacity-75 xl:aspect-7/8"
        />
      </Link>
      <FavoriteProductIcon product={product} />
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <h5 className="mt-1 text-sm text-gray-500">{product.category}</h5>
      <div className="mt-1 flex justify-between gap-x-1 items-baseline">
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.price} Euro
        </p>
        <button
          className="mt-4  bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 cursor-pointer"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductListItem;
