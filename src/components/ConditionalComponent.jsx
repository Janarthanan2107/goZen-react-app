import React, { useState } from "react";
import Button from "./Button";

const ConditionalComponent = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <h3>Conditional Rendering with toggle option!</h3>
      {showMessage ? <p>Hello World!</p> : <p>Click for message</p>}
      <Button onClick={() => setShowMessage(!showMessage)}>Show Message</Button>
    </div>
  );
};

export default ConditionalComponent;
