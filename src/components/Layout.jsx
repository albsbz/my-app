import { useState } from "react";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";
import CartContext from "../context/CartContext";

function Layout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <CartContext value={{ cart, setCart }}>
      <div className="group" data-state={isCartOpen ? "open" : "closed"}>
        <Header setIsCartOpen={setIsCartOpen} />
        <ShoppingCart />

        {children}
        
      </div>
    </CartContext>
  );
}

export default Layout;
