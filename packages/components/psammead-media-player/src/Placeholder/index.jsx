import React from 'react';
import styled from 'styled-components';
import { string, func, shape, oneOf } from 'prop-types';
import Image from '@bbc/psammead-image';
import PlayButton from '@bbc/psammead-play-button';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING_DBL, GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { GEL_LONG_PRIMER } from '@bbc/gel-foundations/typography';
import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import Guidance from '../Guidance';

const StyledPlaceholder = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledNoScript = styled.noscript`
  ${({ service }) => getSansRegular(service)}
  ${GEL_LONG_PRIMER};

  position: absolute;
  bottom: 0;
  font-weight: normal;
  padding: ${GEL_SPACING};
  color: ${C_WHITE};
  border-bottom: 0.0625rem solid transparent;
  @media screen and (-ms-high-contrast: active) {
    background-color: window;
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL};
  }
`;

const PlayButtonWrapper = styled.span``;

const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  bottom: 0;

  /* stylelint-disable */
  /* https://www.styled-components.com/docs/advanced#referring-to-other-components */
  ${StyledPlaceholder}:hover &,
  ${StyledPlaceholder}:focus & {
    background-color: ${C_POSTBOX};
  }
  /* stylelint-enable */
`;

const NoScriptHiddenStyle = () => (
  <noscript>
    <style>
      {`
     #media-player-guiidance, #media-player-play-button {
       display: none;
     }
    `}
    </style>
  </noscript>
);

const Placeholder = ({ onClick, service, src, srcset, mediaInfo }) => {
  const {
    title,
    datetime,
    duration,
    durationSpoken,
    type,
    guidanceMessage,
  } = mediaInfo;

  return (
    <StyledPlaceholder onClick={onClick}>
      <NoScriptHiddenStyle />
      {guidanceMessage && (
        <Guidance
          messageId="media-player-guiidance"
          service={service}
          guidanceMessage={guidanceMessage}
        />
      )}
      <PlayButtonWrapper id="media-player-play-button">
        <StyledPlayButton
          title={title}
          service={service}
          onClick={() => {}}
          datetime={datetime}
          duration={duration}
          durationSpoken={durationSpoken}
          type={type}
          guidanceMessage={guidanceMessage}
        />
      </PlayButtonWrapper>

      <StyledNoScript service={service}>
        This video cannot play in your browser. Please enable Javascript or try
        a different browser.
      </StyledNoScript>
      <Image alt="" src={src} srcset={srcset} />
    </StyledPlaceholder>
  );
};

Placeholder.propTypes = {
  onClick: func.isRequired,
  service: string.isRequired,
  src: string.isRequired,
  srcset: string,
  mediaInfo: shape({
    title: string.isRequired,
    datetime: string,
    duration: string,
    durationSpoken: string,
    type: oneOf(['audio', 'video']),
    guidanceMessage: string,
  }),
};
Placeholder.defaultProps = {
  srcset: null,
  mediaInfo: shape({
    datetime: null,
    duration: null,
    durationSpoken: null,
    type: 'video',
    guidanceMessage: null,
  }),
};

export default Placeholder;
