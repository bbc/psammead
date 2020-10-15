import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';

const Wrapper = styled.div`
  display: inline-block;
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `}
`;

const MediaIndicator = ({ size }) => (
  <Wrapper
    size={size}
    dangerouslySetInnerHTML={{
      __html: `
      <svg class="rounded-play-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <path class="rounded-play-button__outer-circle" d="M20,0C8.954,0,0,8.954,0,20s8.954,20,20,20s20-8.954,20-20S31.046,0,20,0z"/>
          <path class="rounded-play-button__inner-circle" fill="#fff" d="M20,1.765C9.929,1.765,1.765,9.929,1.765,20S9.929,38.235,20,38.235S38.235,30.071,38.235,20
          S30.071,1.765,20,1.765z"/>
          <polygon class="rounded-play-button__triangle" points="15.799,26.94 27.062,20.009 15.799,13.078 "/>
      </svg>
      `,
    }}
  />
);

MediaIndicator.propTypes = {
  size: string.isRequired,
};

export default MediaIndicator;
