import React from "react";

//MUST PASS onClick AS PROP
function Button({ onChange, onClick, className, buttonLabel }) {
  return (
    <button onClick={onClick} onChange={onChange} className={className}>
      {buttonLabel}
    </button>
  );
}

export default Button;
