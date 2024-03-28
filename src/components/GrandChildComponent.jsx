// GrandChildComponent.js
import React from "react";
import Button from "./Button";

const GrandChildComponent = ({ sharedState, setSharedState }) => {
  const handleStateChange = () => {
    // Update the shared state
    setSharedState("World!");
  };

  return (
    <div>
      <h3>GrandChild Component</h3>
      {/* Access and use the shared state */}
      <p>Shared State: {sharedState}</p>
      <Button onClick={handleStateChange}>Change Shared State</Button>
    </div>
  );
};

export default GrandChildComponent;
