import React from 'react';
import { string, bool, element, func } from 'prop-types';
import Img from '@bbc/psammead-image';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
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
    <VisuallyHiddenText>This is some off screen text</VisuallyHiddenText>
    {children}
    <Img src="https://placehold.it/640x360" alt="" width="300" />
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
