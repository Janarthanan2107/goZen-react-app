import React from "react";

const withUpperCase = (WrappedComponent) => {
  return (props) => {
    const { text } = props;
    const upperCaseText = text.toUpperCase();

    return <WrappedComponent {...props} text={upperCaseText} />;
  };
};

const HOCComponent = ({ text }) => {
  return <div>{text}</div>;
};

export default withUpperCase(HOCComponent);
