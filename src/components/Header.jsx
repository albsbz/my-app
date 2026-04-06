import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Header({ setIsCartOpen }) {
  return (
    <header className="h-12 bg-transparent sticky top-0 anchor anchor-[--header-anchor] group/header">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-2 lg:px-8 bg-gray-100  top-0 z-10 transform  md:hover:h-10 transition-transform duration-300 ease-in-out"
      >
        <div className="flex lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5 hidden group-hover/header:block">
            <span className=" text-indigo-600 uppercase">My Shop</span>
          </a>
        </div>

        <div className="flex  flex-1 justify-end">
        
          <button
            className="columns-1 items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hidden group-hover/header:flex"
            onClick={(e) => {
              e.preventDefault();
              setIsCartOpen((isOpen) => !isOpen);
            }}
            popoverTarget="cart-popover"
          >
            <span className=" text-indigo-600">Cart</span>
            <ShoppingCartIcon className="h-4 w-4 text-indigo-600" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
