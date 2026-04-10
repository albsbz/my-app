import { fetchApi } from "../utils/api";

const getAll = () => fetchApi("/products/category-list");

export default { getAll };
