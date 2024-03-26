// ToggleButton.js
import React, { useState } from "react";
import Button from "./Button";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <Button onClick={toggle}>{isOn ? "ON" : "OFF"}</Button>
    </div>
  );
};

export default ToggleButton;
