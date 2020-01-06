import React, { useState } from 'react';
import styled from 'styled-components';
import { string, bool, oneOf, shape } from 'prop-types';
import Placeholder from './Placeholder';
import Amp from './Amp';
import Canonical from './Canonical';

const landscapeRatio = '56.25%'; // (9/16)*100 = 16:9
const portraitRatio = '177.78%'; // (16/9)*100 = 9:16
const StyledVideoContainer = styled.div`
  padding-top: ${({ portrait }) => (portrait ? portraitRatio : landscapeRatio)};
  position: relative;
  overflow: hidden;
`;

const StyledAudioContainer = styled.div`
  height: 165px;
  position: relative;
  overflow: hidden;
`;

export const CanonicalMediaPlayer = ({
  showPlaceholder,
  placeholderSrc,
  placeholderSrcset,
  portrait,
  src,
  title,
  skin,
  service,
  mediaInfo,
  noJsClassName,
  noJsMessage,
}) => {
  const [placeholderActive, setPlaceholderActive] = useState(showPlaceholder);
  const handlePlaceholderClick = () => setPlaceholderActive(false);

  const StyledContainer =
    skin === 'audio' ? StyledAudioContainer : StyledVideoContainer;

  return (
    <StyledContainer portrait={portrait}>
      {placeholderActive ? (
        <Placeholder
          onClick={handlePlaceholderClick}
          src={placeholderSrc}
          srcset={placeholderSrcset}
          service={service}
          mediaInfo={mediaInfo}
          noJsClassName={noJsClassName}
          noJsMessage={noJsMessage}
        />
      ) : (
        <Canonical
          service={service}
          src={src}
          title={title}
          placeholderSrc={placeholderSrc}
        />
      )}
    </StyledContainer>
  );
};

export const AmpMediaPlayer = ({
  placeholderSrcset,
  placeholderSrc,
  portrait,
  src,
  title,
  skin,
}) => {
  const StyledContainer =
    skin === 'audio' ? StyledAudioContainer : StyledVideoContainer;

  return (
    <StyledContainer portrait={portrait}>
      <Amp
        placeholderSrcset={placeholderSrcset}
        placeholderSrc={placeholderSrc}
        src={src}
        title={title}
        height={portrait ? 9 : 16}
        width={portrait ? 16 : 9}
      />
    </StyledContainer>
  );
};

CanonicalMediaPlayer.propTypes = {
  placeholderSrc: string,
  placeholderSrcset: string,
  portrait: bool,
  showPlaceholder: bool,
  src: string.isRequired,
  title: string.isRequired,
  skin: oneOf(['classic', 'audio']),
  service: string.isRequired,
  noJsClassName: string,
  noJsMessage: string.isRequired,
  mediaInfo: shape({
    title: string.isRequired,
    datetime: string,
    duration: string,
    durationSpoken: string,
    type: oneOf(['video', 'audio']),
    guidanceMessage: string,
  }).isRequired,
};

CanonicalMediaPlayer.defaultProps = {
  portrait: false,
  showPlaceholder: true,
  skin: 'classic',
  placeholderSrc: null,
  placeholderSrcset: null,
  noJsClassName: null,
};

AmpMediaPlayer.propTypes = {
  placeholderSrc: string.isRequired,
  placeholderSrcset: string,
  portrait: bool,
  src: string.isRequired,
  title: string.isRequired,
  skin: oneOf(['classic', 'audio']),
};

AmpMediaPlayer.defaultProps = {
  portrait: false,
  skin: 'classic',
  placeholderSrcset: null,
};
