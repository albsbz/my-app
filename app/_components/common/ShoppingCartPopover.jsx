"use client";

import { useContext } from "react";
import CartContext from "../../_context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ShoppingCartList from "./ShoppingCartList";
import { CalculateTotal } from "../../_utils/other";

function ShoppingCartPopover({ setIsCartOpen }) {
  const { cart } = useContext(CartContext);
  return (
    <div
      id="cart-popover"
      className=" mr-4 transition  transition-discrete flex-wrap [--anchor-gap:--spacing(10)] backdrop:bg-transparent right-0 z-10 origin-top-left  p-4 ring-1 ring-gray-900/5 focus:outline-none group-data-[state=closed]:hidden opacity-0 group-data-[state=open]:flex group-data-[state=open]:opacity-100 group-data-[state=open]:animate-in group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out-0 group-data-[state=open]:fade-in-0 group-data-[state=closed]:zoom-out-95 group-data-[state=open]:zoom-in-95 w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5 target-[--header-anchor]  position-area-[bottom_right] duration-500 ease-in-out"
    >
      <button
        type="button"
        className="absolute top-2 right-5 text-gray-400 hover:text-gray-500"
        onClick={() => setIsCartOpen(false)}
      >
        <XMarkIcon className="h-5 w-5 cursor-pointer" aria-hidden="true " />
      </button>
      <ShoppingCartList cart={cart} />
      <Link
        href="/cart"
        onClick={() => setIsCartOpen(false)}
        className="flex items-center justify-center w-full gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
      >
        Total: {CalculateTotal(cart).toFixed(2)} Euro
      </Link>
    </div>
  );
}

export default ShoppingCartPopover;
