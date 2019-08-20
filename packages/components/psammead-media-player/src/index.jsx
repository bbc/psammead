import React, { useState } from 'react';
import styled from 'styled-components';
import { string, bool, oneOf } from 'prop-types';
import Placeholder from './Placeholder';
import Amp from './Amp';
import Canonical from './Canonical';

const landscapeRatio = '56.25%'; // (9/16)*100 = 16:9
const portraitRatio = '177.78%'; // (16/9)*100 = 9:16
const StyledContainer = styled.div`
  padding-top: ${({ orientation }) =>
    orientation === 'Portrait' ? portraitRatio : landscapeRatio};
  position: relative;
  overflow: hidden;
`;

export const CanonicalMediaPlayer = ({
  showPlaceholder,
  placeholderSrc,
  orientation,
  src,
}) => {
  const [placeholderActive, setPlaceholderActive] = useState(showPlaceholder);
  const handlePlaceholderClick = () => setPlaceholderActive(false);

  return (
    <StyledContainer orientation={orientation}>
      {placeholderActive ? (
        <Placeholder onClick={handlePlaceholderClick} src={placeholderSrc} />
      ) : (
        <Canonical src={src} />
      )}
    </StyledContainer>
  );
};

export const AmpMediaPlayer = ({ placeholderSrc, orientation, src }) => (
  <StyledContainer orientation={orientation}>
    <Amp placeholderSrc={placeholderSrc} src={src} />
  </StyledContainer>
);

CanonicalMediaPlayer.propTypes = {
  showPlaceholder: bool,
  placeholderSrc: string,
  src: string.isRequired,
  orientation: oneOf(['Portrait', 'Landscape']),
};

CanonicalMediaPlayer.defaultProps = {
  showPlaceholder: true,
  placeholderSrc: null,
  orientation: 'Landscape',
};

AmpMediaPlayer.propTypes = {
  orientation: oneOf(['Portrait', 'Landscape']),
  placeholderSrc: string.isRequired,
  src: string.isRequired,
};

AmpMediaPlayer.defaultProps = {
  orientation: 'Landscape',
};
