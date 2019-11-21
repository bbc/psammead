import React from 'react';
import { string } from 'prop-types';
import styled, { css } from 'styled-components';
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
  border: 0.0625rem solid transparent;
  color: ${C_WHITE};
  background-color: ${({ guidanceMessage }) =>
    guidanceMessage && GUIDANCE_BACKGROUND};

  @media screen and (-ms-high-contrast: active) {
    background-color: ${({ guidanceMessage }) =>
      guidanceMessage && 'transparent'};
  }
`;

const baseTextStyles = css`
  display: block;
  position: absolute;
  font-weight: normal;
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
  ${baseTextStyles}
`;

const StyledNoScript = styled.noscript`
  strong {
    ${baseTextStyles}
    bottom: 0;
  }
`;

const Guidance = ({ guidanceMessage, service }) => (
  <GuidanceWrapper
    service={service}
    className="guidance-wrapper"
    guidanceMessage={guidanceMessage}
  >
    {guidanceMessage && (
      <GuidanceMessage className="guidance-message" aria-hidden="true">
        {guidanceMessage}
      </GuidanceMessage>
    )}
    <StyledNoScript>
      <strong>
        This video cannot play in your browser. Please enable Javascript or try
        a different browser.
      </strong>
    </StyledNoScript>
  </GuidanceWrapper>
);

Guidance.propTypes = {
  guidanceMessage: string,
  service: string.isRequired,
};

Guidance.defaultProps = {
  guidanceMessage: null,
};

export default Guidance;
