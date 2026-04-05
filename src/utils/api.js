const apiUrl = (url) => {
  return `${import.meta.env.VITE_API_URL}${url}`;
};
export { apiUrl };
