import { getCartFromLocalStorage } from "@/app/_utils/storage";
import CartContext from "@context/CartContext";
import { useEffect, useEffectEvent, useState } from "react";
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
    const updateStateOnLoad = useEffectEvent(() => {
    setCart(getCartFromLocalStorage());

  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return <CartContext value={{ cart, setCart }}>{children}</CartContext>;
}

export default CartProvider;
