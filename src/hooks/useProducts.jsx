import { useMemo, useState } from "react";
import { fetchApi } from "../utils/api";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAll = useMemo(
    () => async () => {
      try {
        const products = await fetchApi("/products?offset=10&limit=10");
        setProducts(products);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const getOne = useMemo(
    () => async (id) => {
      try {
        const product = await fetchApi(`/products/${id}`);
        setProduct(product);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { products, isLoading, getAll, getOne, product };
}
