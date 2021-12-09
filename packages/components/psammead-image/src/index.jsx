import React from 'react';
import { number, oneOfType, string, bool, func } from 'prop-types';
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

const StyledPicture = styled.picture`
  display: block;
  width: 100%;
  visibility: visible;
  ${props => props.fade && fadeIn};
`;

const StyledImg = styled.img`
  display: block;
  width: 100%;
`;

export const Img = props => {
  const { src, srcset, fallbackSrcset, onLoad, ...otherProps } = props;

  return (
    <StyledPicture onLoad={onLoad}>
      <source srcSet={srcset} />
      {fallbackSrcset && <source srcSet={fallbackSrcset} />}
      <StyledImg src={src} {...otherProps} />
    </StyledPicture>
  );
};

Img.propTypes = {
  alt: string.isRequired,
  fade: bool,
  height: oneOfType([string, number]),
  sizes: string,
  src: string.isRequired,
  srcset: string,
  fallbackSrcset: string,
  width: oneOfType([string, number]),
  onLoad: func,
};

Img.defaultProps = {
  fade: false,
  height: null,
  sizes: null,
  srcset: null,
  fallbackSrcset: null,
  width: null,
  onLoad: () => {},
};

export default Img;
