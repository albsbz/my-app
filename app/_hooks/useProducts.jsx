"use client";

import { useCallback, useContext, useState } from "react";

import productsApi from "../_services/products";
import ErrorContext from "../_context/ErrorContext";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setErrorMessage } = useContext(ErrorContext);

  const getAll = useCallback(async () => {
    try {
      const products = await productsApi.getAll();
      setProducts(products);
    } catch {
      setErrorMessage("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }, [setErrorMessage]);

  const getByFilter = useCallback(
    async (title) => {
      try {
        const products = await productsApi.getByFilter(title);
        setProducts(products);
      } catch {
        setErrorMessage("Failed to fetch products by filter");
      } finally {
        setIsLoading(false);
      }
    },
    [setErrorMessage],
  );

  const getOne = useCallback(
    async (id) => {
      try {
        const product = await productsApi.getOne(id);
        setProduct(product);
      } catch {
        setErrorMessage("Failed to fetch product");
      } finally {
        setIsLoading(false);
      }
    },
    [setErrorMessage],
  );

  return { products, isLoading, getAll, getOne, product, getByFilter };
}
