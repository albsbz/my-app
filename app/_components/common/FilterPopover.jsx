"use client";

import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SearchBlock from "./SearchBlock";
import Button from "./Button";
import SortBlock from "./SortBlock";

function FilterPopover() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <div
      className={`left-2 absolute top-1/4 ${open ? "w-64 bg-gray-100 " : "w-10 bg-indigo-700"}  opacity-95   p-4 rounded-md shadow-md overflow-hidden transition-all duration-300 ease-in-out cursor-pointer z-5  flex items-center justify-center`}
      onClick={handleClick}
    >
      {!open ? (
        <span className=" [writing-mode:vertical-lr]  font-medium te text-xl bg-indigo-700 text-white">
          Filter
        </span>
      ) : (
        <div className="flex flex-col">
          <SortBlock />
          <SearchBlock />

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
        </div>
      )}
    </div>
  );
}

export default FilterPopover;
