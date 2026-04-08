import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/common/Header";
import CartContext from "../context/CartContext";
import ShoppingCartPopover from "../components/common/ShoppingCartPopover";
import ProductContext from "../context/ProductContext";

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
    <CartContext value={{ cart, setCart }}>
      <ProductContext
        value={{
          products,
          setProducts,
          favoriteProducts,
          isFavoriteProduct,
          toggleFavoriteProduct,
        }}
      >
        <div className="group" data-state={isCartOpen ? "open" : "closed"}>
          <Header setIsCartOpen={setIsCartOpen} />
          <ShoppingCartPopover setIsCartOpen={setIsCartOpen} />

          <Outlet />
        </div>
      </ProductContext>
    </CartContext>
  );
}

export default MainLayout;
