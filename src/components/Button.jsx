import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.5rem",
        borderRadius: "6px",
        outline: "none",
        border: "0.5px solid gray",
        margin: "0.2rem",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
