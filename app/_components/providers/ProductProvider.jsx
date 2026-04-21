import ProductContext from "@context/ProductContext";
import useCategories from "@hooks/useCategories";
import { getFavoriteProductsFromLocalStorage } from "@utils/storage";
import { use, useEffect, useEffectEvent, useMemo, useState } from "react";
import useFilters from "@hooks/useFilters";
import useProducts from "@/app/_hooks/useProducts";

function ProductProvider({ children }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  
  const { products: fetchProducts, isLoading, getAll } = useProducts();
  const {
    categories,
    toggleAllFilteredCategories,
    toggleFilteredCategory,
    getAll: getAllCategories,
    showOneCategory,
  } = useCategories();
  const { filteredProducts } = useFilters({
    products: allProducts,
    categories,
    search,
    sort
  });

  useEffect(() => {
    getAll();
  }, [getAll]);

  useEffect(() => {
    setAllProducts(fetchProducts);
  }, [fetchProducts, setAllProducts]);

  const toggleFavoriteProduct = (product) => {
    setFavoriteProducts((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product],
    );
  };
  const isFavoriteProduct = (product) => {
    return favoriteProducts.some((p) => p.id === product.id);
  };
  const updateStateOnLoad = useEffectEvent(() => {
    setFavoriteProducts(getFavoriteProductsFromLocalStorage());
  }, []);

  useEffect(() => {
    updateStateOnLoad();
  }, []);

  useEffect(() => {
    categories?.length === 0 && getAllCategories() ;
  }, [getAllCategories, categories]);

  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  return (
    <ProductContext
      value={{
        products: filteredProducts,
        allProducts,
        setAllProducts,
        favoriteProducts,
        isFavoriteProduct,
        toggleFavoriteProduct,
        categories,
        toggleAllFilteredCategories,
        toggleFilteredCategory,
        getAllCategories,
        showOneCategory,
        isLoading,
        search,
        setSearch,
        setSort,
      }}
    >
      {children}
    </ProductContext>
  );
}

export default ProductProvider;
