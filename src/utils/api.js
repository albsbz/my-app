const apiUrl = (url) => {
  return `${import.meta.env.VITE_API_URL}${url}`;
};

const fetchApi = async (url) => {
  try {
    const response = await fetch(apiUrl(url));
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
export { apiUrl, fetchApi };
