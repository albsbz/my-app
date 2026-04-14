"use client";
import { ShoppingCartIcon as ShoppingCartIconEmpty } from "@heroicons/react/24/outline";
import Link from "next/link";

import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useContext, useState } from "react";
import CartContext from "@/app/_context/CartContext";

function Header({ setIsCartOpen, hideHeader }) {
  const { cart } = useContext(CartContext);
  return (
    <header
      className={`bg-transparent sticky col-start-1 row-start-1  top-0 anchor anchor-[--header-anchor] group/header z-10 overflow-hidden ${hideHeader ? "h-10" : "h-25"} transition-all duration-300 ease-in-out`}
    >
      <nav
        aria-label="Global"
        className={`mx-auto flex items-center justify-between ${hideHeader ? "p-0" : "p-2"} lg:px-8 bg-gray-100  top-0  transform     opacity-90 transition-all duration-300 ease-in-out`}
      >
        <div className="flex lg:flex-1 ">
          <Link href="/" className=" block  ">
            <Image
              src="/logo.png"
              alt="Logo"
              width={hideHeader ? 60 : 100}
              height={hideHeader ? 60 : 100}
            />
          </Link>
        </div>
        <div className="flex  flex-1 justify-end">
          <Link
            href="/favorites"
            className="m-1.5 p-1.5 flex items-center hover:bg-gray-200 rounded-md transition-colors duration-300 px-2"
          >
            <span className=" text-olive-900 font-medium">Favorites</span>
            <HeartIcon className="h-4 w-4 text-olive-900 ml-1 " />
          </Link>
          <button
            className="columns-1 items-center text-sm font-semibold leading-6 text-gray-900 cursor-pointer  flex    hover:bg-gray-200 rounded-md transition-colors duration-300 px-2"
            onClick={(e) => {
              e.preventDefault();
              setIsCartOpen((isOpen) => !isOpen);
            }}
          >
            <span className=" text-olive-900 font-medium ">Cart</span>
            {cart.length === 0 ? (
              <ShoppingCartIconEmpty className="h-4 w-4 text-olive-900 ml-1 " />
            ) : (
              <ShoppingCartIcon className="h-4 w-4 text-red-900 ml-1 " />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
