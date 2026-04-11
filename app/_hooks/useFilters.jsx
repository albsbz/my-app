"use client";

import { useMemo } from "react";

function useFilters({ products = [], categories = [] }) {
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      categories.some(
        (category) => category.show && category.title === product.category,
      ),
    );
  }, [categories, products]);

  return { filteredProducts };
}
export default useFilters;
