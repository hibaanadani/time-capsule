import React from "react";
import "./style.css";

const Input = ({
  name,
  hint,
  required,
  onChangeListener,
  value,
  type = "text",
  as,
  rows,
  cols 
}) => {
  if (as === "textarea") {
    return (
      <textarea
        name={name}
        value={value}
        placeholder={hint}
        className="primary-textarea"
        required={required}
        onChange={onChangeListener}
        rows={rows}
        cols={cols}
      />
    );
  } else {
    return (
      <input
        type={type}
        name={name}
        value={value}
        placeholder={hint}
        className="primary-input"
        required={required}
        onChange={onChangeListener}
      />
    );
  }
};
export default Input;