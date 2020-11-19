import React from 'react';

const CardCallToAction = ({ children, ...props }) => {
  return (
    <span>
      [Icon]
      <p {...props}>{children}</p>
    </span>
  );
};

export default CardCallToAction;
