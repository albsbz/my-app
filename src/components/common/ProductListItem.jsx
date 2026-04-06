import { Link } from "react-router";
import useCart from "../../hooks/useCart";

function ProductListItem({ product }) {
  const { addToCart } = useCart();
  return (
    <Link to={`/product/${product.id}`} className="group">
      <img
        alt={product.title}
        src={product.images[0]}
        className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
      />
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <div className="mt-1 flex justify-between gap-x-1 items-baseline">
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.price} Euro
        </p>
        <button
          className="mt-4  bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
}

export default ProductListItem;
