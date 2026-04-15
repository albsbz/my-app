"use client";

import { useContext } from "react";
import CartContext from "../_context/CartContext";

export default function useCart() {
  const { cart, setCart } = useContext(CartContext);



  // return { cart, addToCart };
}
