// InputField.js
import React from "react";

const InputField = ({ type, value, onChange, name, id }) => {
  return (
    <input type={type} value={value} onChange={onChange} name={name} id={id} />
  );
};

export default InputField;
