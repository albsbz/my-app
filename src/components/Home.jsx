import { useEffect } from "react";
import useProducts from "../hooks/useProducts";
import Loader from "./common/Loader";
import ProductsList from "./common/ProductsList";

function Home() {
  const { products, isLoading, getAll } = useProducts();

  useEffect(() => {
    getAll();
  }, [getAll]);

  return <>{isLoading ? <Loader /> : <ProductsList products={products} />}</>;
}

export default Home;
