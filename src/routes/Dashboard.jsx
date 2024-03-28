import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const goToHome = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleLogout = () => {
    logout();
    navigate("/login"); // Navigate to the home page
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Button onClick={goToHome}>Go to Home</Button>{" "}
      {/* Button to trigger navigation to home */}
      <Button onClick={handleLogout}>Logout</Button>{" "}
    </div>
  );
};

export default Dashboard;
