import React from 'react';
import styled from 'styled-components';
import { string, shape } from 'prop-types';
import { C_WHITE, C_EBON } from '@bbc/psammead-styles/colours';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { GEL_SPACING, GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';
import { getMinion, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const MediaIndicatorWrapper = styled.div`
  padding: ${GEL_SPACING} ${GEL_SPACING_HLF};
  background-color: ${C_WHITE};
  display: inline-block;
  font-family: ${GEL_FF_REITH_SANS};
  ${props => getMinion(props.script)};
  color: ${C_EBON};
`;

const PlayIcon = styled.svg`
  vertical-align: middle;
  margin: 0 ${GEL_SPACING_HLF};
  fill: ${C_EBON};
`;

const TimeDuration = styled.time`
  vertical-align: middle;
  margin: 0 ${GEL_SPACING_HLF};
`;

const MediaIndicator = ({ datetime, duration, offscreenText, script }) => (
  <MediaIndicatorWrapper script={script}>
    <PlayIcon
      aria-hidden="true"
      viewBox="0 0 32 32"
      width="12px"
      height="12px"
      focusable="false"
    >
      <polygon points="3,32 29,16 3,0" />
    </PlayIcon>
    {duration && datetime && offscreenText ? (
      <TimeDuration datetime={datetime}>
        <VisuallyHiddenText>{offscreenText}</VisuallyHiddenText>
        <span aria-hidden="true">{duration}</span>
      </TimeDuration>
    ) : null}
  </MediaIndicatorWrapper>
);

MediaIndicator.propTypes = {
  datetime: string,
  duration: string,
  offscreenText: string,
  script: shape(scriptPropType).isRequired,
};

MediaIndicator.defaultProps = {
  datetime: null,
  duration: null,
  offscreenText: null,
};

export default MediaIndicator;
