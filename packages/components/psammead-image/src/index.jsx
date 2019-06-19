import React from 'react';
import { number, oneOfType, string, bool } from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

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
  animation-duration: 200ms;
  animation-name: ${fadeInKeyframes};
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
  ${props => props.fade && fadeIn};
`;

export const Img = ({ alt, fade, src, srcset, height, width }) => {
  const props = { alt, fade, src, height, width };

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
