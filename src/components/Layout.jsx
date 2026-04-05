import { useState } from "react";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";

function Layout({ children }) {
	const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className="group" data-state={isCartOpen ? "open" : "closed"}>
      <Header setIsCartOpen={setIsCartOpen} />
      <ShoppingCart />
      {children}
    </div>
  );
}

export default Layout;
