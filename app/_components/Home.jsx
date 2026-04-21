"use client";

import { useContext, useEffect } from "react";
import useProducts from "../_hooks/useProducts";
import Loader from "./common/Loader";
import ProductsList from "./common/ProductsList";
import ProductContext from "../_context/ProductContext";
import FilterPopover from "./common/FilterPopover";

function Home() {
  const { products, allProducts, setAllProducts, isLoading } =
  useContext(ProductContext);


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FilterPopover />
          <ProductsList products={products} />
        </>
      )}
    </>
  );
}

export default Home;
