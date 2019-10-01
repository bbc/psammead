import React, { useState } from 'react';
import styled from 'styled-components';
import { string, bool, oneOf } from 'prop-types';
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
  portrait,
  src,
  skin,
  title,
}) => {
  const [placeholderActive, setPlaceholderActive] = useState(showPlaceholder);
  const handlePlaceholderClick = () => setPlaceholderActive(false);

  const StyledContainer =
    skin === 'audio' ? StyledAudioContainer : StyledVideoContainer;

  return (
    <StyledContainer portrait={portrait}>
      {placeholderActive ? (
        <Placeholder onClick={handlePlaceholderClick} src={placeholderSrc} />
      ) : (
        <Canonical src={src} title={title} />
      )}
    </StyledContainer>
  );
};

export const AmpMediaPlayer = ({
  placeholderSrc,
  portrait,
  src,
  skin,
  title,
}) => {
  const StyledContainer =
    skin === 'audio' ? StyledAudioContainer : StyledVideoContainer;

  return (
    <StyledContainer portrait={portrait}>
      <Amp placeholderSrc={placeholderSrc} src={src} title={title} />
    </StyledContainer>
  );
};

CanonicalMediaPlayer.propTypes = {
  placeholderSrc: string,
  portrait: bool,
  showPlaceholder: bool,
  src: string.isRequired,
  title: string.isRequired,
  skin: oneOf(['classic', 'audio']),
};

CanonicalMediaPlayer.defaultProps = {
  placeholderSrc: null,
  portrait: false,
  showPlaceholder: true,
  skin: 'classic',
};

AmpMediaPlayer.propTypes = {
  placeholderSrc: string.isRequired,
  portrait: bool,
  src: string.isRequired,
  title: string.isRequired,
  skin: oneOf(['classic', 'audio']),
};

AmpMediaPlayer.defaultProps = {
  portrait: false,
  skin: 'classic',
};
