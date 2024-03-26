// ConditionalComponent.js
import React, { useState } from "react";
import Button from "./Button";

const ConditionalComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <Button onClick={toggleLogin}>Login</Button>
      )}
    </div>
  );
};

export default ConditionalComponent;
