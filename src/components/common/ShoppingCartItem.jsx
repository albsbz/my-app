import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import QuantitySelector from "./QuantitySelector";

function ShoppingCartItem({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const deleteCartItem = (id) => {
    setCart([...cart.filter((p) => p.id !== id)]);
    console.log(cart);
  };
  const updateCartItemQuantity = (id, newQuantity) => {
    setCart(
      cart.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: newQuantity };
        }
        return p;
      }),
    );
  };
  return (
    <div className="p-4">
      <div className="group relative flex justify-between rounded-lg p-4 hover:bg-gray-50">
        <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <img
            src={product.images[0]}
            alt={product.title}
            className="size-10 text-gray-600 group-hover:text-indigo-600"
          />
        </div>
        <div>
          <a href="#" className="font-semibold text-gray-900">
            {product.title}
          </a>
          <p className="mt-1 text-gray-600">{product.price} Euro</p>
        </div>
        <QuantitySelector
          quantity={product.quantity}
          updateCartItemQuantity={(newQuantity) => {
            updateCartItemQuantity(product.id, newQuantity);
          }}
        />
        <div
          className="flex-grow:3 mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
          onClick={() => {
            console.log("delete", product.id);
            deleteCartItem(product.id);
          }}
        >
          <ArchiveBoxXMarkIcon className="size-6" />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
