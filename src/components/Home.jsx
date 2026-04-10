import { useContext, useEffect } from "react";
import useProducts from "../hooks/useProducts";
import Loader from "./common/Loader";
import ProductsList from "./common/ProductsList";
import ProductContext from "../context/ProductContext";
import FilterPopover from "./common/FilterPopover";

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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FilterPopover />
          <ProductsList products={contextProducts} />
        </>
      )}
    </>
  );
}

export default Home;
