"use client";

import { useState } from "react";
import Header from "@components/common/Header";
import ShoppingCartPopover from "@components/common/ShoppingCartPopover";
import ErrorMessage from "@components/common/ErrorMessage";
import ErrorProvider from "../_components/providers/ErrorProvider";
import CartProvider from "../_components/providers/CartProvider";
import ProductProvider from "../_components/providers/ProductProvider";

function MainLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ErrorProvider>
      <CartProvider>
        <ProductProvider>
          <div className="group" data-state={isCartOpen ? "open" : "closed"}>
            <Header setIsCartOpen={setIsCartOpen} />
            <ErrorMessage />
            <ShoppingCartPopover setIsCartOpen={setIsCartOpen} />

            {children}
          </div>
        </ProductProvider>
      </CartProvider>
    </ErrorProvider>
  );
}

export default MainLayout;
