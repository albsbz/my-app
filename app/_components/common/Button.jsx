import { useState } from "react";

function Button({ handler, text, styles = "", disabled }) {
  const [additionalStyle, setAdditionalStyle] = useState("");
  return (
    <button
      className={`  ${!styles && "bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 cursor-pointer"}  ${styles} ${additionalStyle} ${disabled ? " opacity-50 cursor-not-allowed " : ""}`}
      onClick={() => {
        if (!disabled) {
          handler();
        }
      }}
      onMouseDown={() => {
        if (!disabled) {
          setAdditionalStyle("bg-indigo-900!");
        }
      }}
      onMouseUp={() => {
        if (!disabled) {
          setAdditionalStyle("");
        }
      }}
    >
      {text}
    </button>
  );
}

export default Button;
