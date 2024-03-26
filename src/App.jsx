/// App.js
import React from "react";
import Button from "./components/Button";
import InputField from "./components/InputField";
import Counter from "./components/Counter";
import ToggleButton from "./components/ToggleButton";
import ConditionalComponent from "./components/ConditionalComponent";
import FormComponent from "./components/FormComponent";
import withLogger from "./components/withLogger";
import LifecycleComponent from "./components/LifecycleComponent";

const App = () => {
  const ButtonWithLogger = withLogger(Button);
  const InputFieldWithLogger = withLogger(InputField);
  const ConditionalComponentWithLogger = withLogger(ConditionalComponent);
  const FormComponentWithLogger = withLogger(FormComponent);

  return (
    <div>
      <h1>React Components</h1>
      <h2>Basic Component Creation</h2>
      <ButtonWithLogger onClick={() => console.log("Button clicked")}>
        Click me
      </ButtonWithLogger>
      <InputFieldWithLogger
        value="Jana"
        onChange={(e) => console.log(e.target.value)}
      />

      <h2>State Management</h2>
      <Counter />
      <ToggleButton />

      <h2>Conditional Rendering</h2>
      <ConditionalComponentWithLogger />

      <h2>Forms and Controlled Components</h2>
      <FormComponentWithLogger />

      <h2>Component Composition</h2>
      <LifecycleComponent />
    </div>
  );
};

export default App;
