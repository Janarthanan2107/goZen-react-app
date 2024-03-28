import React, { useState } from "react";
import InputText from "./InputText";
import Button from "./Button";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [result, setResult] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setResult({ username: formData.username, password: formData.password });
  };

  return (
    <>
      <h3>Form with two input fields and display while submit</h3>
      <form onSubmit={handleSubmit}>
        <InputText
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <InputText
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit">Submit</Button>
      </form>

      <p>Username: {result.username}</p>
      <p>Password: {result.password}</p>
    </>
  );
};

export default Form;
