import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_DBL, GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { GEL_LONG_PRIMER } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';

const GUIDANCE_BACKGROUND = 'rgba(34, 34, 34, 0.75)';

const GuidanceWrapper = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${GEL_LONG_PRIMER};

  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${GUIDANCE_BACKGROUND};
  color: ${C_WHITE};

  padding: ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL};
  }
`;

const GuidanceMessage = styled.strong`
  font-weight: normal;
`;

const Guidance = ({ guidanceMessage, service }) => (
  <GuidanceWrapper service={service}>
    <GuidanceMessage>{guidanceMessage}</GuidanceMessage>
  </GuidanceWrapper>
);

Guidance.propTypes = {
  guidanceMessage: string.isRequired,
  service: string.isRequired,
};

export default Guidance;
