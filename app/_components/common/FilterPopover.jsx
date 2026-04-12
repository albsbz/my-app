"use client";

import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import { XMarkIcon } from "@heroicons/react/24/solid";

function FilterPopover() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div
      className={`left-2 absolute top-1/2 ${open ? "w-64" : "w-10"}  p-4 rounded-md shadow-md overflow-hidden transition-all duration-300 ease-in-out cursor-pointer z-10 bg-gray-100 flex items-center justify-center`}
      onClick={handleClick}
    >
      {!open ? (
        <span className=" [writing-mode:vertical-lr]  font-medium text-gray-900 text-xl">
          Filter
        </span>
      ) : (
        <>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
          <CategoryFilter />
        </>
      )}
    </div>
  );
}

export default FilterPopover;
