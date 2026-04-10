import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/common/Header";
import CartContext from "../context/CartContext";
import ShoppingCartPopover from "../components/common/ShoppingCartPopover";
import ProductContext from "../context/ProductContext";
import useFilters from "../hooks/useFilters";
import useCategories from "../hooks/useCategories";
import ErrorContext from "../context/ErrorContext";
import ErrorMessage from "../components/common/ErrorMessage";

function MainLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [favoriteProducts, setFavoriteProducts] = useState(() => {
    const storedFavoriteProducts = localStorage.getItem("favoriteProducts");
    return storedFavoriteProducts ? JSON.parse(storedFavoriteProducts) : [];
  });
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { categories, toggleAllCategories, toggleCategory, getAll } =
    useCategories();

  const { filteredProducts } = useFilters({ products, categories });

  useEffect(() => {
    getAll();
  }, [getAll]);

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
            toggleAllCategories,
            toggleCategory,
            getAll,
          }}
        >
          <div className="group" data-state={isCartOpen ? "open" : "closed"}>
            <Header setIsCartOpen={setIsCartOpen} />
            <ErrorMessage />
            <ShoppingCartPopover setIsCartOpen={setIsCartOpen} />

            <Outlet />
          </div>
        </ProductContext>
      </CartContext>
    </ErrorContext>
  );
}

export default MainLayout;
