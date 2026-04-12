"use client";

import { useCallback, useContext, useState } from "react";

import categoriesApi from "../_services/categories";
import ErrorContext from "../_context/ErrorContext";

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

  const toggleAllFilteredCategories = (direction) => {
    setCategories((c) =>
      c.map((category) => ({ ...category, show: direction })),
    );
  };

  const toggleFilteredCategory = (title) => {
    setCategories((c) =>
      c.map((category) =>
        category.title === title
          ? { ...category, show: !category.show }
          : category,
      ),
    );
  };

  const showOneCategory = (title) => {
    setCategories((c) =>
      c.map((category) =>
        category.title === title
          ? { ...category, show: true }
          : { ...category, show: false },
      ),
    );
  };

  return {
    categories,
    getAll,
    isLoading,
    toggleAllFilteredCategories,
    toggleFilteredCategory,
    showOneCategory,
  };
}
