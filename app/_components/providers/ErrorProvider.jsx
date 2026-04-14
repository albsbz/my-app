import ErrorContext from "@context/ErrorContext";
import { useState } from "react";
function ErrorProvider({children}) {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <ErrorContext value={{ errorMessage, setErrorMessage }}>
      {children}
    </ErrorContext>
  );
}

export default ErrorProvider;
