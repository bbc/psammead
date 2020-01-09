import React, { useState, useRef } from 'react';
import { string, number } from 'prop-types';
import styled, { css } from 'styled-components';
import Guidance from '../Guidance';
import useTimeout from './useTimeout';

const Canonical = ({ service, src, title, placeholderSrc, timeoutMs }) => {
  const [hasTimedOut, setHasTimedOut] = useState(null);
  const iframeRef = useRef(null);

  useTimeout(setHasTimedOut, iframeRef, timeoutMs);

  const CanonicalWrapper = styled.div`
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    ${placeholderSrc &&
      css`
        background-image: url(${placeholderSrc});
        background-repeat: no-repeat;
        background-size: contain;
      `}
  `;

  const StyledIframe = styled.iframe`
    border: 0;
    height: 100%;
    width: 100%;
  `;

  return (
    <CanonicalWrapper>
      {hasTimedOut ? (
        <Guidance
          service={service}
          guidanceMessage="There was a problem loading this content. Please check your internet connection and try again."
          noJsMessage=""
        />
      ) : (
        <StyledIframe
          ref={iframeRef}
          src={src}
          title={title}
          allow="autoplay; fullscreen"
          scrolling="no"
          gesture="media"
          allowFullScreen
        />
      )}
    </CanonicalWrapper>
  );
};

Canonical.propTypes = {
  service: string.isRequired,
  src: string.isRequired,
  title: string.isRequired,
  placeholderSrc: string,
  timeoutMs: number,
};

Canonical.defaultProps = {
  placeholderSrc: null,
  timeoutMs: 5000,
};

export default Canonical;
