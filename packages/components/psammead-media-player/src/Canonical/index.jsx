import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';
import Message from '../Message';

const Canonical = ({
  src,
  placeholderSrcset,
  title,
  placeholderSrc,
  service,
  noJsMessage,
  showPlaceholder,
}) => {
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
    ${showPlaceholder ? backgroundStyle : null}
  `;

  return (
    <>
      <StyledIframe
        src={src}
        title={title}
        allow="autoplay; fullscreen"
        scrolling="no"
        gesture="media"
        allowFullScreen
      />
      <noscript>
        <Message
          service={service}
          message={noJsMessage}
          placeholderSrc={placeholderSrc}
          placeholderSrcset={placeholderSrcset}
        />
      </noscript>
    </>
  );
};

Canonical.propTypes = {
  src: string.isRequired,
  placeholderSrcset: string,
  title: string.isRequired,
  placeholderSrc: string,
  service: string.isRequired,
  noJsMessage: string.isRequired,
  showPlaceholder: bool.isRequired,
};

Canonical.defaultProps = {
  placeholderSrc: null,
  placeholderSrcset: '',
};

export default Canonical;
