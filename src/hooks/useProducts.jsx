import { useEffect, useState } from "react";
import { apiUrl } from "../utils/api";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProducts = async () => {
    try {
      const response = await fetch(apiUrl("/products?offset=10&limit=10"));
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return { products, isLoading, getProducts };
}
