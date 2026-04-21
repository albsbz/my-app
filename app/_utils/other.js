export function CalculateTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

