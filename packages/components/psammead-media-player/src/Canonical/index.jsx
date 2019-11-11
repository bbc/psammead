import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Canonical = ({ src, title, placeholderSrc }) => {
  const backgroundStyle = `
    background-image: url(${placeholderSrc});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const StyledIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
    ${placeholderSrc ? backgroundStyle : ''}
  `;

  return (
    <StyledIframe
      src={src}
      title={title}
      allow="autoplay; fullscreen"
      gesture="media"
      allowFullScreen
    />
  );
};

Canonical.propTypes = {
  src: string.isRequired,
  title: string.isRequired,
  placeholderSrc: string,
};

Canonical.defaultProps = {
  placeholderSrc: null,
};

export default Canonical;
