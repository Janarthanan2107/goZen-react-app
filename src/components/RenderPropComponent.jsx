import React from 'react';

const RenderPropComponent = ({ render }) => {
  return <div>{render()}</div>;
};

export default RenderPropComponent;
