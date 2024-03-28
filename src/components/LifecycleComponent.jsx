import React, { useState, useEffect } from "react";

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);

  // Initialization: ComponentDidMount equivalent
  useEffect(() => {
    console.log("Component mounted");

    // Cleanup: ComponentWillUnmount equivalent
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // Updating: ComponentDidUpdate equivalent
  useEffect(() => {
    console.log("Count changed:", count);

    // We can update the DOM here if necessary
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Lifecycle Component flow is ordered below:</h3>
      <p>1.Initialization: Component mounted</p>
      <p>2.Updating: Count changed: {count}</p>
      <p>3.Cleanup: Component unmounted</p>
      <p>4.Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default LifecycleComponent;
