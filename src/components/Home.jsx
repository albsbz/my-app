import { useContext, useEffect } from "react";
import useProducts from "../hooks/useProducts";
import Loader from "./common/Loader";
import ProductsList from "./common/ProductsList";
import ProductContext from "../context/ProductContext";

function Home() {
  const { products, isLoading, getAll } = useProducts();
  const { products: contextProducts, setProducts: contextSetProducts } =
    useContext(ProductContext);

  useEffect(() => {
    getAll();
  }, [getAll]);

  useEffect(() => {
    contextSetProducts(products);
  }, [products, contextSetProducts]);

  return (
    <>{isLoading ? <Loader /> : <ProductsList products={contextProducts} />}</>
  );
}

export default Home;
