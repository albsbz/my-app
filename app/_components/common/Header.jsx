"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Header({ setIsCartOpen }) {
  return (
    <header className=" bg-transparent sticky col-start-1 row-start-1  top-0 anchor anchor-[--header-anchor] group/header z-10 overflow-hidden h-25">
      <nav
        aria-label="Global"
        className="mx-auto h-15 flex items-center justify-between p-2 lg:px-8 bg-gray-100  top-0  transform  lg:hover:h-25  md:h-15 transition-transform duration-400  opacity-90"
      >
        <div className="flex lg:flex-1 ">
          <Link href="/" className="-m-1.5 p-1.5 block  ">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="flex  flex-1 justify-end">
          <Link
            href="/favorites"
            className="m-1.5 p-1.5 flex items-center hover:bg-gray-200 rounded-md transition-colors duration-300 px-2"
          >
            <span className=" text-olive-900 font-medium" >Favorites</span>
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
            <ShoppingCartIcon className="h-4 w-4 text-olive-900 ml-1 " />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
