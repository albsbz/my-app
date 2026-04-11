"use client";

import { useContext, useEffect } from "react";
import ErrorContext from "../../_context/ErrorContext";

function ErrorMessage() {
  const { errorMessage, setErrorMessage } = useContext(ErrorContext);

  useEffect(() => {
    if (!errorMessage) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [errorMessage, setErrorMessage]);

  if (!errorMessage) {
    return null;
  }

  return (
    <div className="bg-red-500 text-white p-2 rounded text-center">
      {errorMessage}
    </div>
  );
}

export default ErrorMessage;
