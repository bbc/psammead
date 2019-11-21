import React from 'react';
import styled from 'styled-components';
import { string, func, shape, oneOf } from 'prop-types';
import Image from '@bbc/psammead-image';
import PlayButton from '@bbc/psammead-play-button';
import { C_POSTBOX } from '@bbc/psammead-styles/colours';
import Guidance from '../Guidance';

const StyledPlaceholder = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

const NoScriptHiddenStyle = (
  // this would be rendered multiple times if we have more than one audio/video content on a page,
  // and only the first one would be used leaving a lot oof unused styles.
  // we have to consider moving it to the <head> in simorgh.
  <noscript>
    <style>
      {`
     .guidance-message, .media-player-play-button {
       display: none;
     }
     .guidance-wrapper {
      background-color: rgba(34, 34, 34, 0.75);
      @media screen and (-ms-high-contrast: active) {
        background-color: transparent;
      }
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
      {NoScriptHiddenStyle}
      <Guidance service={service} guidanceMessage={guidanceMessage} />
      <PlayButtonWrapper className="media-player-play-button">
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
