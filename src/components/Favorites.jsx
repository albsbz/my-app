import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import ProductsList from "./common/ProductsList";

function Favorites() {
  const { favoriteProducts } = useContext(ProductContext);
  return favoriteProducts.length > 0 ? (
    <ProductsList products={favoriteProducts} />
  ) : (
    <p>No favorite products found.</p>
  );
}

export default Favorites;
