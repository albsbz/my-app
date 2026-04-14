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
          <div
            className="group grid grid-rows-[min-content_1fr] "
            data-state={isCartOpen ? "open" : "closed"}
          >
            <div className="h-screen col-span-full row-[1/span_2]"></div>
            <Header setIsCartOpen={setIsCartOpen} />

            <div className="col-start-1 row-start-2 -mt-8">
              <ErrorMessage />
              <ShoppingCartPopover setIsCartOpen={setIsCartOpen} />
              {children}
            </div>
          </div>
        </ProductProvider>
      </CartProvider>
    </ErrorProvider>
  );
}

export default MainLayout;
