import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

const FormComponent = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const validate = (form) => {
    const errors = {};
    if (!form.name) {
      errors.name = "Name is required";
    }
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    console.log(form);

    // Check if there are no validation errors before clearing the form
    if (Object.keys(validationErrors).length === 0) {
      setForm({});
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <label htmlFor="name">Name</label>
      <InputField
        type="text"
        value={form.name}
        onChange={handleChange}
        name="name"
        id="name"
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <br />

      <label htmlFor="email">Email</label>
      <InputField
        type="text"
        value={form.email}
        onChange={handleChange}
        name="email"
        id="email"
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <br />

      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default FormComponent;
