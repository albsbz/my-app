import { fetchApi } from "../_utils/api";

const getAll = async () => {
  const { products } = await fetchApi("/products?offset=0&limit=12");
  return products;
};

const getByFilter = async (title) => {
  const { products } = await fetchApi(`/products/search?q=${title}`);
  return products;
};

const getOne = (id) => fetchApi(`/products/${id}`);

export default { getAll, getOne, getByFilter };
