import { getCartFromLocalStorage } from "@/app/_utils/storage";
import CartContext from "@context/CartContext";
import { use, useEffect, useEffectEvent, useState } from "react";
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const productInCart = (id) => {
    return cart.find((p) => p.id === id)?.quantity;
  };
  const updateCartItemQuantity = (id, newQuantity) => {
    setCart(
      cart.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: newQuantity };
        }
        return p;
      }),
    );
  };
  const deleteCartItem = (id) => {
    setCart([...cart.filter((p) => p.id !== id)]);
  };

  const addToCart = (product) => {
    if (!productInCart(product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
      return;
    }
    setCart(
      cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      }),
    );
  };
  const updateStateOnLoad = useEffectEvent(() => {
    setCart(getCartFromLocalStorage());
  }, []);
  useEffect(() => {
    updateStateOnLoad();
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        updateCartItemQuantity,
        addToCart,
        deleteCartItem,
        productInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
