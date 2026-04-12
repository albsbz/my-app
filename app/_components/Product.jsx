"use client";
import { useContext, useEffect } from "react";
import useProducts from "../_hooks/useProducts";
import ProductCard from "./common/ProductCard";
import Loader from "./common/Loader";
import ProductContext from "../_context/ProductContext";

function Product({ id }) {
  const { product, getOne, isLoading } = useProducts();
  const { showOneCategory } = useContext(ProductContext);

  useEffect(() => {
    getOne(id);
  }, [id, getOne]);
  return isLoading ? (
    <Loader />
  ) : (
    <ProductCard product={product} showOneCategory={showOneCategory} />
  );
}

export default Product;
