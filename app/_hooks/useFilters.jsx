"use client";

import { useMemo } from "react";
function filterProductsByCategory(categories) {
  return {
    ...this,
    products: this.products.filter((product) =>
      categories.some(
        (category) => category.show && category.title === product.category,
      ),
    ),
  };
}
function filterProductsBySearch(search) {
  return {
    ...this,
    products: !search
      ? this.products
      : this.products.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase()),
        ),
  };
}

function filterProductsByPagination(skip, limit) {
  return {
    ...this,
    products: this.products.slice(skip, skip + limit),
  };
}

function sortProducts(sort) {
  const sortedProducts = [...this.products].sort((a, b) => {
    if (sort === "asc") return a.price - b.price;
    if (sort === "desc") return b.price - a.price;
    if (sort === "name-asc") return a.title.localeCompare(b.title);
    if (sort === "name-desc") return b.title.localeCompare(a.title);
    if (sort === "default") return a.id - b.id;
    return 0;
  });
  return { ...this, products: sortedProducts };
}
function useFilters({
  products = [],
  categories = [],
  search = "",
  skip = 0,
  limit = 12,
  sort = "default",
}) {
  const filteredProducts = useMemo(
    () =>
      // .filterProductsByPagination(skip, limit)
      ({
        products,
        filterProductsByCategory,
        filterProductsBySearch,
        filterProductsByPagination,
        sortProducts,
      })
        .filterProductsByCategory(categories)
        .filterProductsBySearch(search)
        .sortProducts(sort).products,
    [categories, products, search, skip, limit, sort],
  );

  return { filteredProducts };
}
export default useFilters;
