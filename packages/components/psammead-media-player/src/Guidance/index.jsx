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
  border: 0.0625rem solid transparent;
  color: ${C_WHITE};
  @media screen and (-ms-high-contrast: active) {
    background-color: transparent;
  }
`;

const Content = styled.div`
  padding: ${GEL_SPACING};
  border-bottom: 0.0625rem solid transparent;
  @media screen and (-ms-high-contrast: active) {
    background-color: window;
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL};
  }
`;

const GuidanceMessage = styled.strong`
  font-weight: normal;
`;

const Guidance = ({ guidanceMessage, service }) => (
  <GuidanceWrapper service={service}>
    <Content>
      <GuidanceMessage>{guidanceMessage}</GuidanceMessage>
    </Content>
  </GuidanceWrapper>
);

Guidance.propTypes = {
  guidanceMessage: string.isRequired,
  service: string.isRequired,
};

export default Guidance;
