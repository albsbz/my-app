import { useContext } from "react";
import CartContext from "../context/CartContext";

function Product({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const addToCart = (product) => {
    if (!cart.find((p) => p.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
      return;
    }
    setCart(
      cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      }),
    );
  };
  return (
    <a href={product.href} className="group">
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
            console.log(cart);
          }}
        >
          Add to cart
        </button>
      </div>
    </a>
  );
}

export default Product;
