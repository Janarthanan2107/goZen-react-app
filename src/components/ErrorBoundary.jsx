import React, { useState, useEffect } from "react";

// ErrorBoundary functional component
const ErrorBoundary = ({ children }) => {
  // State to track if an error occurred
  const [hasError, setHasError] = useState(false);

  // Effect to handle errors
  useEffect(() => {
    const handleError = () => {
      setHasError(true);
    };

    // Listen for errors in children components
    window.addEventListener("error", handleError);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  // Render fallback UI if an error occurred
  if (hasError) {
    return (
      <div style={{ textAlign: "center" }}>
        Something went wrong. Please try again later.
      </div>
    );
  }

  // Render children if no error occurred
  return children;
};

export default ErrorBoundary;
