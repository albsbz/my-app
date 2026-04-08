import { useCallback,  useState } from "react";
import { fetchApi } from "../utils/api";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAll = useCallback(
    async () => {
      try {
        const products = await fetchApi("/products?offset=10&limit=12");
        setProducts(products);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const getByFilter = useCallback(
    async (title) => {
      try {
        const products = await fetchApi(`/products?title=${title}`);
        setProducts(products);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const getOne = useCallback(
    async (id) => {
      try {
        const product = await fetchApi(`/products/${id}`);
        setProduct(product);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { products, isLoading, getAll, getOne, product, getByFilter };
}
