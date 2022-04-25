import React from "react";

//MUST PASS onClick AS PROP
function Button({ onChange, onClick, className, buttonLabel, disabled }) {
  return (
    <button
      onClick={onClick}
      onChange={onChange}
      className={className}
      disabled={disabled}
    >
      {buttonLabel}
    </button>
  );
}

export default Button;
