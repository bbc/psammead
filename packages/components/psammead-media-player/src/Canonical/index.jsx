import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
`;

const Canonical = ({ src }) => (
  <StyledIframe
    src={src}
    scrolling="no"
    allow="autoplay; fullscreen"
    gesture="media"
  />
);

Canonical.propTypes = {
  src: string.isRequired,
};

export default Canonical;
