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
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TimeDuration = styled.time`
  vertical-align: middle;
  margin: 0 ${GEL_SPACING_HLF};
`;

const MediaIndicator = ({ datetime, duration, offscreenText, type }) => (
  <MediaIndicatorWrapper>
    <FlexWrapper>
      {mediaIcons[type]}
      {duration && datetime && offscreenText ? (
        <TimeDuration dateTime={datetime}>
          <VisuallyHiddenText>{offscreenText}</VisuallyHiddenText>
          <span aria-hidden="true">{duration}</span>
        </TimeDuration>
      ) : null}
    </FlexWrapper>
  </MediaIndicatorWrapper>
);

MediaIndicator.propTypes = {
  datetime: string,
  duration: string,
  offscreenText: string.isRequired,
  type: oneOf(['video', 'audio']),
};

MediaIndicator.defaultProps = {
  datetime: null,
  duration: null,
  type: 'video',
};

export default MediaIndicator;
