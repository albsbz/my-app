import { useState } from "react";
import { Outlet } from "react-router";
import Header from "../components/common/Header";
import ShoppingCart from "../components/common/ShoppingCart";
import CartContext from "../context/CartContext";

function MainLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <CartContext value={{ cart, setCart }}>
      <div className="group" data-state={isCartOpen ? "open" : "closed"}>
        <Header setIsCartOpen={setIsCartOpen} />
        <ShoppingCart />

        <Outlet />
      </div>
    </CartContext>
  );
}

export default MainLayout;
