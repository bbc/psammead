import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_SPACING,
  GEL_SPACING_HLF,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';
import { GEL_LONG_PRIMER } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const StyledGuidance = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${GEL_LONG_PRIMER};

  strong {
    font-weight: normal;
  }
`;

const GuidanceWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(34, 34, 34, 0.75);
  color: ${C_WHITE};
  padding: ${GEL_MARGIN_BELOW_400PX};
  border: none;
`;

const Content = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  height: ${GEL_SPACING_TRPL};
  padding: ${GEL_SPACING_DBL} ${GEL_MARGIN_BELOW_400PX};
`;

const GuidanceMessage = styled.strong`
  padding: 0 0 0 ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    position: relative;
    top: ${GEL_SPACING_HLF};
  }
`;

const IconWrapper = styled.div`
  > svg {
    color: ${C_WHITE};
    fill: currentColor;
    height: ${GEL_SPACING_TRPL};
    width: ${GEL_SPACING_TRPL};
  }
  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING} 0 0 0;
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
