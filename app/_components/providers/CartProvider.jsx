import NotificationContext from "@/app/_context/NotificationContext";
import { getCartFromLocalStorage } from "@/app/_utils/storage";
import CartContext from "@context/CartContext";
import { use, useContext, useEffect, useEffectEvent, useState } from "react";
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { setNotificationMessage } = useContext(NotificationContext);
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
    setNotificationMessage("Item removed from cart");
  };

  const addToCart = (product) => {
    setNotificationMessage("Product added to cart");
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
    <CartContext
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
    </CartContext>
  );
}

export default CartProvider;
