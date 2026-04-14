import ProductContext from "@context/ProductContext";
import useCategories from "@hooks/useCategories";
import { getFavoriteProductsFromLocalStorage } from "@utils/storage";
import { useEffect, useEffectEvent, useState } from "react";
import useFilters from "@hooks/useFilters";

function ProductProvider({ children }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const {
    categories,
    toggleAllFilteredCategories,
    toggleFilteredCategory,
    getAll: getAllCategories,
    showOneCategory,
  } = useCategories();
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

  const { filteredProducts } = useFilters({ products, categories });
  useEffect(() => {
    updateStateOnLoad();
  }, []);

  useEffect(() => {
    categories?.length === 0 && getAllCategories();
  }, [getAllCategories, categories]);

  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  return (
    <ProductContext
      value={{
        products: filteredProducts,
        setProducts,
        favoriteProducts,
        isFavoriteProduct,
        toggleFavoriteProduct,
        categories,
        toggleAllFilteredCategories,
        toggleFilteredCategory,
        getAllCategories,
        showOneCategory,
      }}
    >
      {children}
    </ProductContext>
  );
}

export default ProductProvider;
