import { useContext } from "react";
import Button from "./Button";

import FavoriteProductIcon from "./FavoriteProductIcon";
import Link from "next/link";
import CartContext from "@/app/_context/CartContext";
import QuantitySelector from "./QuantitySelector";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";

function ProductListItem({ product }) {
  const { addToCart, productInCart, updateCartItemQuantity, deleteCartItem } =
    useContext(CartContext);
  return (
    <div className="relative">
      <Link href={`/product/${product.id}`} className="group/product">
        <img
          alt={product.title}
          src={product.images[0]}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover/product:opacity-75 xl:aspect-7/8"
        />
      </Link>
      <FavoriteProductIcon product={product} />
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <h5 className="mt-1 text-sm text-gray-500">{product.category}</h5>
      <div className="mt-1 flex justify-between gap-x-1 items-center">
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.price} Euro
        </p>
        {!productInCart(product.id) ? (
          <Button
            handler={() => {
              addToCart(product);
            }}
            text="Add to cart"
          />
        ) : (
          <>
            <QuantitySelector
              quantity={productInCart(product.id)}
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
          </>
        )}
      </div>
    </div>
  );
}

export default ProductListItem;
