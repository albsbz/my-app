import { useCallback, useContext, useState } from "react";

import categoriesApi from "../services/categories";
import ErrorContext from "../context/ErrorContext";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setErrorMessage } = useContext(ErrorContext);

  const getAll = useCallback(async () => {
    try {
      const categories = await categoriesApi.getAll();
      setCategories(
        categories.map((category) => ({ title: category, show: true })),
      );
    } catch {
      setErrorMessage("Failed to fetch categories");
    } finally {
      setIsLoading(false);
    }
  }, [setErrorMessage]);

  const toggleAllCategories = (direction) => {
    setCategories((c) =>
      c.map((category) => ({ ...category, show: direction })),
    );
  };

  const toggleCategory = (title) => {
    setCategories((c) =>
      c.map((category) =>
        category.title === title
          ? { ...category, show: !category.show }
          : category,
      ),
    );
  };

  return { categories, getAll, isLoading, toggleAllCategories, toggleCategory };
}
