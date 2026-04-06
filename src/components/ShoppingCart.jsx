import { useContext } from "react";
import CartContext from "../context/CartContext";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart() {
  const { cart } = useContext(CartContext);
  return (
    <div
      id="cart-popover"
      className=" px-4  transition flex flex-direction-column transition-discrete flex-wrap [--anchor-gap:--spacing(10)] backdrop:bg-transparent right-0 z-10 origin-top-left  p-4 ring-1 ring-gray-900/5 focus:outline-none opacity-0 group-data-[state=open]:flex group-data-[state=open]:opacity-100 group-data-[state=open]:animate-in group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out-0 group-data-[state=open]:fade-in-0 group-data-[state=closed]:zoom-out-95 group-data-[state=open]:zoom-in-95 w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 target-[--header-anchor]  position-area-[bottom_right]"
    >
      {cart.length
        ? [...cart]
            .reverse()
            .map((product) => (
              <ShoppingCartItem key={product.id} product={product} />
            ))
        : "Empty cart"}

      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
        <a
          href="#"
          className="flex items-center justify-center w-full gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
        >
          Total:{" "}
          {cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0,
          )}{" "}
          Euro
        </a>
      </div>
    </div>
  );
}

export default ShoppingCart;
