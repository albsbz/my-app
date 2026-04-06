import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function SearchBlock() {
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <button onClick={() => setShowInput(!showInput)}>
        <MagnifyingGlassIcon className="h-4 w-4 text-mauve-800" />
      </button>

      <div
        className={` ${showInput ? "flex" : "hidden"} items-center rounded-md bg-white pr-3 outline-1 outline-gray-300`}
      >
        <input
          id="price"
          type="text"
          name="price"
          className="block grow  p-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
        />
      </div>
    </>
  );
}

export default SearchBlock;
