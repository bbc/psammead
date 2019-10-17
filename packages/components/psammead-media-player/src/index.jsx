import React, { useState } from 'react';
import styled from 'styled-components';
import { string, bool, oneOf, arrayOf } from 'prop-types';
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
  placeholderSrcset,
  portrait,
  src,
  skin,
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
          srcset={placeholderSrcset}
        />
      ) : (
        <Canonical src={src} />
      )}
    </StyledContainer>
  );
};

export const AmpMediaPlayer = ({ placeholderSrcset, portrait, src, skin }) => {
  const StyledContainer =
    skin === 'audio' ? StyledAudioContainer : StyledVideoContainer;

  return (
    <StyledContainer portrait={portrait}>
      <Amp placeholderSrcset={placeholderSrcset} src={src} />
    </StyledContainer>
  );
};

CanonicalMediaPlayer.propTypes = {
  placeholderSrcset: arrayOf(string),
  portrait: bool,
  showPlaceholder: bool,
  src: string.isRequired,
  skin: oneOf(['classic', 'audio']),
};

CanonicalMediaPlayer.defaultProps = {
  placeholderSrcset: null,
  portrait: false,
  showPlaceholder: true,
  skin: 'classic',
};

AmpMediaPlayer.propTypes = {
  placeholderSrcset: arrayOf(string).isRequired,
  portrait: bool,
  src: string.isRequired,
  skin: oneOf(['classic', 'audio']),
};

AmpMediaPlayer.defaultProps = {
  portrait: false,
  skin: 'classic',
};
