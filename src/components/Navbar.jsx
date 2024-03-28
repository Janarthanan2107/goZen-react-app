import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <nav className="navbar">
      <ul>
        <a href="./">
          <li>Page 1</li>
        </a>
        <a href="./about">
          <li>Page 2</li>
        </a>
        <a href="./about">
          <li>Page 3</li>
        </a>
        {/* Conditionally render "Dashboard" link if user is authenticated */}
        {isAuthenticated && (
          <a href="./dashboard">
            <li>Dashboard</li>
          </a>
        )}
        <a href="./login">
          <li>Login</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
