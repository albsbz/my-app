import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import SearchBlock from "./SearchBlock";

function Header({ setIsCartOpen }) {
  return (
    <header className="h-12 bg-transparent sticky top-0 anchor anchor-[--header-anchor] group/header">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-2 lg:px-8 bg-gray-100  top-0 z-10 transform  lg:hover:h-10   md:h-5 transition-transform duration-400  opacity-75"
      >
        <div className="flex lg:flex-1 ">
          <Link
            to="/"
            className="-m-1.5 p-1.5 lg:hidden group-hover/header:block transition-transform duration-400  "
          >
            <span className=" text-indigo-600 font-bold uppercase ">
              Home shop
            </span>
          </Link>
        </div>
        <SearchBlock />
        <div className="flex  flex-1 justify-end">
          <button
            className="columns-1 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 lg:hidden group-hover/header:flex cursor-pointer transition-transform duration-400  "
            onClick={(e) => {
              e.preventDefault();
              setIsCartOpen((isOpen) => !isOpen);
            }}
          >
            <span className=" text-indigo-600">Cart</span>
            <ShoppingCartIcon className="h-4 w-4 text-indigo-600 " />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
