import React, { useState } from "react";
import LifecycleComponent from "./LifecycleComponent";
import ParentComponent from "./ParentComponent";

const Page2 = () => {
  // State to be lifted up
  const [sharedState, setSharedState] = useState("Hello");
  return (
    <div>
      <h2>useEffect Hook along with State Management</h2>
      <hr />
      <LifecycleComponent />
      <h2>State Lift-Up and Props Drilling</h2>
      <hr />
      {/* Pass the shared state and setter function down to ParentComponent */}
      <ParentComponent
        sharedState={sharedState}
        setSharedState={setSharedState}
      />
    </div>
  );
};

export default Page2;
