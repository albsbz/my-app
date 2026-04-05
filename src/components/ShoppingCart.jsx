function ShoppingCart() {
  return (
    <div
      id="desktop-menu-solutions"
      anchor="bottom"
      popover
      className="w-screen max-w-max overflow-visible px-4 transition transition-discrete [--anchor-gap:--spacing(5)] backdrop:bg-transparent absolute  right-0 z-10 origin-top-left rounded-lg bg-white p-4 ring-1 ring-gray-900/5 focus:outline-none opacity-0 group-data-[state=open]:flex group-data-[state=open]:opacity-100 group-data-[state=open]:animate-in group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out-0 group-data-[state=open]:fade-in-0 group-data-[state=closed]:zoom-out-95 group-data-[state=open]:zoom-in-95"
    >
      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg outline-1 outline-gray-900/5">
        <div className="p-4">
          <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6 text-gray-600 group-hover:text-indigo-600"
              >
                <path
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <a href="#" className="font-semibold text-gray-900">
                Analytics
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-gray-600">
                Get a better understanding of your traffic
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ShoppingCart;
