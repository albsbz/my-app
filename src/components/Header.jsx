import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Header({ setIsCartOpen }) {
  return (
    <header className="h-12 bg-transparent">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between p-2 lg:px-8 group bg-gray-300 sticky top-0 z-10 transform  md:hover:scale-y-110 transition-transform duration-300 ease-in-out"
      >
        <div className="flex lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5 md:hidden group-hover:block">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="flex flex-1 justify-end">
          <a
            href="#"
            className="text-sm/6 font-semibold text-black-900"
            onClick={(e) => {
              e.preventDefault();
              setIsCartOpen((isOpen) => !isOpen);
            }}
          >
            <ShoppingCartIcon className="h-8 w-8 text-indigo-600" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
