import { useState } from "react";

function Button({ handler, text, styles = "" }) {
  const [additionalStyle, setAdditionalStyle] = useState("");
  return (
    <button
      className={`mt-4  bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 cursor-pointer ${styles} ${additionalStyle}`}
      onClick={handler}
      onMouseDown={() => {
        setAdditionalStyle("bg-indigo-900!");
      }}
      onMouseUp={() => {
        setAdditionalStyle("");
      }}
    >
      {text}
    </button>
  );
}

export default Button;
