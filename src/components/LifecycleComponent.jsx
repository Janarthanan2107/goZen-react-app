// LifecycleComponent.js
import React, { useEffect } from "react";

const LifecycleComponent = () => {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return <div>Lifecycle Component</div>;
};

export default LifecycleComponent;
