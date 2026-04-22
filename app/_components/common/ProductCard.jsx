import { ChevronRightIcon } from "@heroicons/react/24/outline";
import FavoriteProductIcon from "./FavoriteProductIcon";
import Link from "next/link";
import Button from "./Button";
import { useContext } from "react";
import CartContext from "@/app/_context/CartContext";

function ProductCard({ product, showOneCategory }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <Link
                href={"/"}
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRightIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </li>
            <li className="text-sm">
              <Link
                href={"/"}
                className="font-medium text-gray-500 hover:text-gray-600"
                onNavigate={(e) => {
                  showOneCategory(product.category);
                }}
              >
                {product.category}
              </Link>
            </li>
            <li>
              <ChevronRightIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </li>
            <li className="text-sm">
              <Link
                href={""}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.title}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl relative sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <img
            alt={""}
            src={product.images[0]}
            className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
          />
          <FavoriteProductIcon product={product} />
          {product.images[1] && (
            <img
              alt={""}
              src={product.images[1]}
              className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
            />
          )}
          {product.images[2] && (
            <img
              alt={""}
              src={product.images[2]}
              className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
            />
          )}
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.title}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price} Euro
            </p>
            <Button
              handler={() => {
                addToCart(product);
              }}
              text="Add to cart"
              // styles="w-[100%]"
            />
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
