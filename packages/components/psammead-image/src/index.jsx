import React from 'react';
import { number, oneOfType, string, bool } from 'prop-types';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

export { default as AmpImg } from './index.amp';

const fadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeIn = css`
  animation: ${fadeInKeyframes} 0.2s linear;
  transition: visibility 0.2s linear;
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  visibility: visible;
  ${props => props.fade && fadeIn};
`;

export const Img = props => {
  const { srcset, ...otherProps } = props;

  return <StyledImg srcSet={srcset} {...otherProps} />;
};

Img.propTypes = {
  alt: string.isRequired,
  fade: bool,
  height: oneOfType([string, number]),
  sizes: string,
  src: string.isRequired,
  srcset: string,
  width: oneOfType([string, number]),
};

Img.defaultProps = {
  fade: false,
  height: null,
  sizes: null,
  srcset: null,
  width: null,
};

export default Img;
