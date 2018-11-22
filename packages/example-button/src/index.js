import React from 'react';
import StyledButton from './styles/styledExampleButton';

const ExampleButton = ({
  type = 'button',
  disabled = false,
  children,
  onClick,
}) => (
  <StyledButton
    disabled={disabled}
    type={type}
    className="button"
    onClick={onClick}
    {children}
  </StyledButton>
);

export default ExampleButton;
