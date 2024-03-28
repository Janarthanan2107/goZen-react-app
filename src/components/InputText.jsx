// InputField.js
import React from "react";

const InputText = ({ type, value, onChange, name, id, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      style={{
        padding: "0.5rem",
        margin: "0.5rem",
        borderRadius: "4px",
        outline: "none",
        border: "0.5px solid gray",
        width: "240px",
      }}
      placeholder={placeholder}
    />
  );
};

export default InputText;
