const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};
const getFavoriteProductsFromLocalStorage = () => {
  const storedFavoriteProducts = localStorage.getItem("favoriteProducts");
  return storedFavoriteProducts ? JSON.parse(storedFavoriteProducts) : [];
};
export { getCartFromLocalStorage, getFavoriteProductsFromLocalStorage };
