import React from 'react';
import styled, { css } from 'styled-components';
import { string, oneOf, bool } from 'prop-types';
import { C_WHITE, C_EBON } from '@bbc/psammead-styles/colours';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { GEL_SPACING, GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_1_SCREEN_WIDTH_MAX } from '@bbc/gel-foundations/breakpoints';
import { GEL_MINION } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import mediaIcons from './mediaIcons';

const MediaIndicatorWrapper = styled.div`
  padding: ${GEL_SPACING} ${GEL_SPACING_HLF};
  background-color: ${C_WHITE};
  display: block;
  ${({ service }) => getSansRegular(service)}
  ${GEL_MINION};
  color: ${C_EBON};
  height: 2rem;

  ${({ topStory }) =>
    !topStory &&
    css`
      @media (max-width: ${GEL_GROUP_1_SCREEN_WIDTH_MAX}) {
        height: 1.25rem;
        padding: ${GEL_SPACING_HLF} ${GEL_SPACING_HLF} 0;
      }
    `}
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const TimeDuration = styled.time`
  vertical-align: middle;
  margin: 0 ${GEL_SPACING_HLF};
`;

const MediaIndicator = ({
  datetime,
  duration,
  offscreenText,
  type,
  topStory,
  service,
}) => (
  <MediaIndicatorWrapper
    aria-hidden="true"
    topStory={topStory}
    service={service}
  >
    <FlexWrapper>
      {mediaIcons[type]}
      {offscreenText && (
        <VisuallyHiddenText>{offscreenText}</VisuallyHiddenText>
      )}
      {duration && datetime && (
        <TimeDuration dateTime={datetime}>{duration}</TimeDuration>
      )}
    </FlexWrapper>
  </MediaIndicatorWrapper>
);

MediaIndicator.propTypes = {
  datetime: string,
  duration: string,
  offscreenText: string,
  type: oneOf(['video', 'audio']),
  topStory: bool,
  service: string.isRequired,
};

MediaIndicator.defaultProps = {
  datetime: null,
  duration: null,
  offscreenText: null,
  type: 'video',
  topStory: false,
};

export default MediaIndicator;
