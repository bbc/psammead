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
    border: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    ${placeholderSrc ? backgroundStyle : null}
  `;

  return (
    <StyledIframe
      src={src}
      title={title}
      allow="autoplay; fullscreen"
      scrolling="no"
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
