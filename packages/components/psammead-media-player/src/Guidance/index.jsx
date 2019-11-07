import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import {
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_HLF,
} from '@bbc/gel-foundations/spacings';
import { GEL_LONG_PRIMER } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const GUIDANCE_BACKGROUND = 'rgba(34, 34, 34, 0.75)';

const StyledGuidance = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${GEL_LONG_PRIMER};
`;

const GuidanceWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${GUIDANCE_BACKGROUND};
  color: ${C_WHITE};
  @media screen and (-ms-high-contrast: active) {
    background-color: transparent;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: ${GEL_SPACING_DBL};
`;

const GuidanceMessage = styled.strong`
  padding-left: ${GEL_SPACING_HLF};
  font-weight: normal;
`;

const IconWrapper = styled.div`
  > svg {
    color: ${C_WHITE};
    fill: currentColor;
    height: ${GEL_SPACING_TRPL};
    width: ${GEL_SPACING_TRPL};
  }
`;

const Guidance = ({ guidanceMessage, service, children }) => {
  return (
    <StyledGuidance service={service}>
      <GuidanceWrapper>
        <Content>
          <IconWrapper aria-hidden="true">{mediaIcons.guidance}</IconWrapper>
          <GuidanceMessage>{guidanceMessage}</GuidanceMessage>
        </Content>
      </GuidanceWrapper>
      {children}
    </StyledGuidance>
  );
};

Guidance.propTypes = {
  guidanceMessage: string.isRequired,
  service: string.isRequired,
  children: node,
};

Guidance.defaultProps = {
  children: null,
};

export default Guidance;
