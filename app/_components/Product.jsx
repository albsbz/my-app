'use client'
import { useEffect } from "react";
import useProducts from "../_hooks/useProducts";
import ProductCard from "./common/ProductCard";
import Loader from "./common/Loader";

function Product({ id }) {
  const { product, getOne, isLoading } = useProducts();

  useEffect(() => {
    getOne(id);
  }, [id, getOne]);
  return isLoading ? <Loader /> : <ProductCard product={product} />;
}

export default Product;
