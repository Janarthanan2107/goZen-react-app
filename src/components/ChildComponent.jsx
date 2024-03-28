// ChildComponent.js
import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const ChildComponent = ({ sharedState, setSharedState }) => {
  return (
    <div>
      <h3>Child Component to grandchild</h3>
      {/* Pass the shared state and setter function down to GrandChildComponent */}
      <GrandChildComponent sharedState={sharedState} setSharedState={setSharedState} />
    </div>
  );
};

export default ChildComponent;
