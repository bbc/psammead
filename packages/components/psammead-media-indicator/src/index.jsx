import React from 'react';
import styled from 'styled-components';
import { string, oneOf } from 'prop-types';
import { C_WHITE, C_EBON } from '@bbc/psammead-styles/colours';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { GEL_SPACING, GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';
import { GEL_MINION, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import mediaIcons from './mediaIcons';

const MediaIndicatorWrapper = styled.div`
  padding: ${GEL_SPACING} ${GEL_SPACING_HLF};
  background-color: ${C_WHITE};
  display: inline-block;
  font-family: ${GEL_FF_REITH_SANS};
  ${GEL_MINION};
  color: ${C_EBON};
  height: 2rem;
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

const MediaIndicator = ({ datetime, duration, offscreenText, type }) => (
  <MediaIndicatorWrapper aria-hidden="true">
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
};

MediaIndicator.defaultProps = {
  datetime: null,
  duration: null,
  offscreenText: null,
  type: 'video',
};

export default MediaIndicator;
