"use client";

import { useEffect, useEffectEvent, useState } from "react";
import Header from "@components/common/Header";
import CartContext from "@context/CartContext";
import ShoppingCartPopover from "@components/common/ShoppingCartPopover";
import ProductContext from "@context/ProductContext";
import useFilters from "@hooks/useFilters";
import useCategories from "@hooks/useCategories";
import ErrorContext from "@context/ErrorContext";
import ErrorMessage from "@components/common/ErrorMessage";
import {
  getCartFromLocalStorage,
  getFavoriteProductsFromLocalStorage,
} from "../_utils/storage";

function MainLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    categories,
    toggleAllFilteredCategories,
    toggleFilteredCategory,
    getAll: getAllCategories,
      showOneCategory
  } = useCategories();
  const updateStateOnLoad = useEffectEvent(() => {
    setCart(getCartFromLocalStorage());
    setFavoriteProducts(getFavoriteProductsFromLocalStorage());
  }, []);

  const { filteredProducts } = useFilters({ products, categories });
  useEffect(() => {
    updateStateOnLoad();
  }, []);

  useEffect(() => {
    categories?.length === 0 && getAllCategories();
  }, [getAllCategories, categories]);

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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
  }, [favoriteProducts]);

  return (
    <ErrorContext value={{ errorMessage, setErrorMessage }}>
      <CartContext value={{ cart, setCart }}>
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
            showOneCategory
          }}
        >
          <div className="group" data-state={isCartOpen ? "open" : "closed"}>
            <Header setIsCartOpen={setIsCartOpen} />
            <ErrorMessage />
            <ShoppingCartPopover setIsCartOpen={setIsCartOpen} />

            {children}
          </div>
        </ProductContext>
      </CartContext>
    </ErrorContext>
  );
}

export default MainLayout;
