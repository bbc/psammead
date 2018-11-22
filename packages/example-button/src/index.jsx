import React from 'react';
import { string, bool, element, func } from 'prop-types';
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
  >
    {children}
  </StyledButton>
);

ExampleButton.propTypes = {
  type: string.isRequired,
  disabled: bool,
  children: element.isRequired,
  onClick: func.isRequired,
};

ExampleButton.defaultProps = {
  disabled: false,
};

export default ExampleButton;
