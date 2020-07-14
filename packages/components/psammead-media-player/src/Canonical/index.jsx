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
  const [loading, setLoading] = useState(true);
  const backgroundStyle = `
    background-image: url(${placeholderSrc});
    background-repeat: no-repeat;
    background-size: contain;
  `;

  const LoadingImageWrapper = styled.div`
    @keyframes fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${({ loading }) =>
      loading ? '' : 'animation: fade-out 0.3s ease-out 1.6s forwards;'}
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
          console.log('firing onLoad');
          setLoading(false);
        }}
        src={src}
        title={title}
        allow="autoplay; fullscreen"
        scrolling="no"
        gesture="media"
        allowFullScreen
      />
      <LoadingImageWrapper loading={loading}>
        <ImagePlaceholder ratio={56.25} />
      </LoadingImageWrapper>
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
