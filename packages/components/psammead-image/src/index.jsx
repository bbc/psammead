import React from 'react';
import { number, oneOfType, string, bool } from 'prop-types';
import styled, { keyframes } from 'styled-components';

export { default as AmpImg } from './index.amp';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  opacity: 1;
  animation-duration: 2s;
  animation-name: ${props => props.fade && fadeIn};
`;

export const Img = ({ alt, src, srcset, height, width, fade }) => {
  const props = { alt, src, height, width, fade };

  if (srcset) {
    props.srcSet = srcset;
  }

  return <StyledImg {...props} />;
};

Img.propTypes = {
  alt: string.isRequired,
  fade: bool,
  src: string.isRequired,
  srcset: string,
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
};

Img.defaultProps = {
  fade: false,
  height: null,
  srcset: null,
  width: null,
};

export default Img;
