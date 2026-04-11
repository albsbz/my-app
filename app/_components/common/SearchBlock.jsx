"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState, useCallback, useContext } from "react";
import { debounce } from "../../_utils/other";
import useProducts from "../../_hooks/useProducts";
import ProductContext from "../../_context/ProductContext";

function SearchBlock() {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const refInput = useRef(null);
  const { getByFilter, products } = useProducts();
  const { setProducts } = useContext(ProductContext);

  const debouncedSearchRef = useRef();

  useEffect(() => {
    debouncedSearchRef.current = debounce((term) => {
      getByFilter(term);
    }, 300);
  }, [getByFilter]);

  const debouncedSearch = useCallback((term) => {
    debouncedSearchRef.current(term);
  }, []);

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm, debouncedSearch]);

  useEffect(() => {
    refInput.current.focus();
  }, [showInput]);

  return (
    <div>
      <button
        onClick={() => setShowInput(!showInput)}
        className="cursor-pointer"
      >
        {showInput ? (
          <XMarkIcon className="h-4 w-4 text-mauve-800" />
        ) : (
          <MagnifyingGlassIcon className="h-4 w-4 text-mauve-800" />
        )}
      </button>
      <div
        className={`items-center rounded-md bg-white  outline-1 outline-gray-300  ${showInput ? "group-hover/header:block" : "lg:hidden"} target-[--header-anchor] mt-10 position-area-[bottom_span-all] `}
      >
        <input
          id="price"
          type="text"
          name="price"
          ref={refInput}
          className={`  grow  p-1 text-base text-gray-900  focus:outline-none sm:text-sm/6 `}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default SearchBlock;
