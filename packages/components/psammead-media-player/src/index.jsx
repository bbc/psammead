import React, { useState } from 'react';
import styled from 'styled-components';
import { string, bool, oneOf } from 'prop-types';
import Placeholder from './Placeholder';
import Canonical from './Canonical';

const landscapeRatio = '56.25%'; // (9/16)*100 = 16:9
const portraitRatio = '177.78%'; // (16/9)*100 = 9:16
const StyledContainer = styled.div`
  padding-top: ${({ orientation }) =>
    orientation === 'Portrait' ? portraitRatio : landscapeRatio};
  position: relative;
  overflow: hidden;
`;

const MediaPlayer = ({
  showPlaceholder,
  placeholderSrc,
  orientation,
  isAmp,
  src,
}) => {
  const shouldShowPlaceholder = !isAmp && showPlaceholder;
  const [placeholderActive, setPlaceholderActive] = useState(
    shouldShowPlaceholder,
  );
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

MediaPlayer.propTypes = {
  showPlaceholder: bool,
  placeholderSrc: string,
  src: string.isRequired,
  orientation: oneOf(['Portrait', 'Landscape']),
  isAmp: bool,
};

MediaPlayer.defaultProps = {
  showPlaceholder: true,
  placeholderSrc: null,
  orientation: 'Landscape',
  isAmp: false,
};

export default MediaPlayer;
