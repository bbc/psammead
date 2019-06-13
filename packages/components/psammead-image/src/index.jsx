import React from 'react';
import { number, oneOfType, string } from 'prop-types';
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
  animation-name: ${fadeIn};
`;

export const Img = ({ alt, src, srcset, height, width }) => {
  const props = { alt, src, height, width };

  if (srcset) {
    props.srcSet = srcset;
  }

  return <StyledImg {...props} />;
};

Img.propTypes = {
  alt: string.isRequired,
  src: string.isRequired,
  srcset: string,
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
};

Img.defaultProps = {
  height: null,
  srcset: null,
  width: null,
};

export default Img;
