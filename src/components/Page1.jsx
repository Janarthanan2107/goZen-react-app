import React from "react";
import Counter from "./Counter";
import ConditionalComponent from "./ConditionalComponent";
import Form from "./Form";
import HOCComponent from "./HOCComponent";

const Page1 = () => {
  return (
    <div>
      <h2>State Management task with reusable components of buttons</h2>
      <hr />
      <Counter />
      <ConditionalComponent />
      <Form />

      <h3>Higher order component</h3>
      <p>
        Note: The text below is displayed using a higher-order component where
        the words are modified as lowercase to uppercase when passed as props.
      </p>
      <HOCComponent text={"hello world!"} />
    </div>
  );
};

export default Page1;
