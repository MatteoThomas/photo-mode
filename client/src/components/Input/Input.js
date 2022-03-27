import React from "react";

//MUST PASS onClick AS PROP
function Input({ onChange, className }) {
  return <input onChange={onChange} className={className} />;
}

export default Input;
