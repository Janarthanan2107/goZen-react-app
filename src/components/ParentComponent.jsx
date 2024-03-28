// ParentComponent.js
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({ sharedState, setSharedState }) => {
  return (
    <div>
      <h3>Parent Component to child</h3>
      <small>
        Initial values are passed as props to Parent Component and updates are
        made in grandchild component
      </small>
      <ChildComponent
        sharedState={sharedState}
        setSharedState={setSharedState}
      />
    </div>
  );
};

export default ParentComponent;
