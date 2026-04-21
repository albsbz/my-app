"use client";
import { useState } from "react";
import Header from "@components/common/Header";
import ShoppingCartPopover from "@components/common/ShoppingCartPopover";
import ErrorMessage from "@components/common/ErrorMessage";
import ErrorProvider from "../_components/providers/ErrorProvider";
import CartProvider from "../_components/providers/CartProvider";
import ProductProvider from "../_components/providers/ProductProvider";
import NotificationProvider from "../_components/providers/NotificationProvider";
import NotificationMessage from "../_components/common/NotificationMessage";

function MainLayout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <ErrorProvider>
      <NotificationProvider>
        <CartProvider>
          <ProductProvider>
            <div
              className="group grid h-screen grid-rows-[min-content_1fr] "
              data-state={isCartOpen ? "open" : "closed"}
            >
              <div className="h-screen col-span-full row-[1/span_2]"></div>
              <Header setIsCartOpen={setIsCartOpen} hideHeader={hideHeader} />

              <div
                className="col-start-1 row-start-2 -mt-8 overflow-y-auto"
                onScroll={(e) => {
                  if (e.currentTarget.scrollTop > 50) {
                    setHideHeader(true);
                  } else {
                    setHideHeader(false);
                  }
                }}
              >
                <ErrorMessage />
                <NotificationMessage />
                <ShoppingCartPopover setIsCartOpen={setIsCartOpen} />
                {children}
              </div>
            </div>
          </ProductProvider>
        </CartProvider>
      </NotificationProvider>
    </ErrorProvider>
  );
}

export default MainLayout;
