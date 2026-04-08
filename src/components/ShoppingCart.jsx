import ShoppingCartList from "./common/ShoppingCartList";
import useCart from "../hooks/useCart";
import { CalculateTotal } from "../utils/other";

function ShoppingCart() {
  const { cart } = useCart();
  return (
    <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
      <ShoppingCartList cart={cart} />
      <div className="flex items-center justify-center w-full gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
        Total: {CalculateTotal(cart).toFixed(2)} Euro
      </div>
    </div>
  );
}

export default ShoppingCart;
