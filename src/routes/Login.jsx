// Login.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
