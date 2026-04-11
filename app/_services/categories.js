import { fetchApi } from "../_utils/api";

const getAll = () => fetchApi("/products/category-list");

export default { getAll };
