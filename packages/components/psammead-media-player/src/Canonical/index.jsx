import React, { useState } from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';
import ImagePlaceholder from '@bbc/psammead-image-placeholder';
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
  const [loaded, setLoaded] = useState(false);
  const backgroundStyle = `
    background-image: url(${placeholderSrc});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const LoadingImageWrapper = styled.div`
    /* background-color: tomato; */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
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
        onLoad={() => {
          setLoaded(true);
        }}
        src={src}
        title={title}
        allow="autoplay; fullscreen"
        scrolling="no"
        gesture="media"
        allowFullScreen
      />
      {loaded ? null : (
        <LoadingImageWrapper>
          <ImagePlaceholder ratio={56.25} />
        </LoadingImageWrapper>
      )}

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
