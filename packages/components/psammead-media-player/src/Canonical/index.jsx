import React, { useState, useRef } from 'react';
import { string } from 'prop-types';
import styled, { css } from 'styled-components';
import Guidance from '../Guidance';
import useTimeout from './useTimeout';

const TIMEOUT_MS = 5000;

const Canonical = ({ service, src, title, placeholderSrc }) => {
  const [hasTimedOut, setHasTimedOut] = useState(null);
  const iframeRef = useRef(null);

  useTimeout(setHasTimedOut, iframeRef, TIMEOUT_MS);

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
          guidanceMessage="The server did not respond. Please check your connection and try again."
          noJsClassName="no-js"
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
};

Canonical.defaultProps = {
  placeholderSrc: null,
};

export default Canonical;
