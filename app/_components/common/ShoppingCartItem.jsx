"use client";

import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import CartContext from "../../_context/CartContext";
import QuantitySelector from "./QuantitySelector";
import Link from "next/link";

function ShoppingCartItem({ product }) {
  const { cart, setCart, updateCartItemQuantity, deleteCartItem } = useContext(CartContext);

 
  return (
    <div className="group grid grid-cols-subgrid items-center  hover:bg-gray-50  p-4 col-span-4">
      <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        <Link href={`/product/${product.id}`} className="group">
          <img
            src={product.images[0]}
            alt={product.title}
            className="size-10 text-gray-600 group-hover:text-indigo-600"
          />
        </Link>
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
        className=" bg-gray-50 group-hover:bg-white"
        onClick={() => {
          deleteCartItem(product.id);
        }}
      >
        <ArchiveBoxXMarkIcon className="size-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default ShoppingCartItem;
