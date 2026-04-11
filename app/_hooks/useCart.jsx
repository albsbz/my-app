"use client";

import { useContext } from "react";
import CartContext from "../_context/CartContext";

export default function useCart() {
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
  return { cart, addToCart };
}
