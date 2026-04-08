import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/common/Header";
import CartContext from "../context/CartContext";
import ShoppingCartPopover from "../components/common/ShoppingCartPopover";
import ProductContext from "../context/ProductContext";

function MainLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <CartContext value={{ cart, setCart }}>
      <ProductContext value={{ products, setProducts }}>
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
