import React, { useState } from 'react';
import styled from 'styled-components';
import { string, bool } from 'prop-types';
import Placeholder from './Placeholder';
import Amp from './Amp';
import Canonical from './Canonical';

const landscapeRatio = '56.25%'; // (9/16)*100 = 16:9
const portraitRatio = '177.78%'; // (16/9)*100 = 9:16
const StyledContainer = styled.div`
  padding-top: ${({ portrait }) => (portrait ? portraitRatio : landscapeRatio)};
  position: relative;
  overflow: hidden;
`;

export const CanonicalMediaPlayer = ({
  showPlaceholder,
  placeholderSrc,
  portrait,
  src,
}) => {
  const [placeholderActive, setPlaceholderActive] = useState(showPlaceholder);
  const handlePlaceholderClick = () => setPlaceholderActive(false);

  return (
    <StyledContainer portrait={portrait}>
      {placeholderActive ? (
        <Placeholder onClick={handlePlaceholderClick} src={placeholderSrc} />
      ) : (
        <Canonical src={src} />
      )}
    </StyledContainer>
  );
};

export const AmpMediaPlayer = ({ placeholderSrc, portrait, src }) => (
  <StyledContainer portrait={portrait}>
    <Amp placeholderSrc={placeholderSrc} src={src} />
  </StyledContainer>
);

CanonicalMediaPlayer.propTypes = {
  placeholderSrc: string,
  portrait: bool,
  showPlaceholder: bool,
  src: string.isRequired,
};

CanonicalMediaPlayer.defaultProps = {
  placeholderSrc: null,
  portrait: false,
  showPlaceholder: true,
};

AmpMediaPlayer.propTypes = {
  placeholderSrc: string.isRequired,
  portrait: bool,
  src: string.isRequired,
};

AmpMediaPlayer.defaultProps = {
  portrait: false,
};
