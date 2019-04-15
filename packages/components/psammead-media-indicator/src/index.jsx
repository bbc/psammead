import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';

const MediaIndicatorWrapper = styled.div`
  padding: ${GEL_SPACING} ${GEL_SPACING_HLF};
  background-color: ${C_WHITE};
  display: inline-block;
`;

const PlayIcon = styled.svg`
  vertical-align: middle;
  margin: 0 ${GEL_SPACING_HLF};
`;

const TimeDuration = styled.span`
  vertical-align: middle;
  margin: 0 ${GEL_SPACING_HLF};
`;

const MediaIndicator = ({ duration }) => (
  <MediaIndicatorWrapper>
    <PlayIcon viewBox="0 0 32 32" width="12px" height="12px">
      <path d="M3 32l26-16L3 0" />
    </PlayIcon>
    {duration ? <TimeDuration>2:00</TimeDuration> : null}
  </MediaIndicatorWrapper>
);

MediaIndicator.propTypes = {
  duration: string,
};

MediaIndicator.defaultProps = {
  duration: null,
};

export default MediaIndicator;
