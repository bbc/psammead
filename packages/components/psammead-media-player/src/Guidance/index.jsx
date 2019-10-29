import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';
import { C_EBON, C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
  GEL_SPACING_DBL,
  GEL_SPACING,
} from '@bbc/gel-foundations/spacings';
import { GEL_MINION } from '@bbc/gel-foundations/typography';
import { getSansBold } from '@bbc/psammead-styles/font-styles';

const StyledGuidanceIcon = styled.svg`
  color: ${C_EBON};
  fill: currentColor;
`;

const GuidanceIcon = () => (
  <StyledGuidanceIcon
    viewBox="0 0 44 44"
    focusable="false"
    height="30px"
    width="30px"
  >
    <g>
      <circle fill="inherit" cx="22" cy="22" r="11" />
      <path
        fill={C_EBON}
        d="M27.1,27.5h-1.8L25,26.3c-0.8,1.1-2,1.4-3.1,1.4c-3.3,0-5.5-2.5-5.5-5.7c0-3.2,2.2-5.7,5.5-5.7c2.3,0,4.7,1.2,5,4h-2.9c-0.1-0.9-1-1.5-2.2-1.5c-1.8,0-2.6,1.6-2.6,3.3c0,1.6,0.7,3.3,2.6,3.3c1.4,0,2.4-0.7,2.5-1.7h-2v-2.1h4.6V27.5z"
      />
    </g>
  </StyledGuidanceIcon>
);

const StyledGuidance = styled.div`
  ${({ service }) => getSansBold(service)}
  ${GEL_MINION};
`;

const GuidanceWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(34, 34, 34, 0.75);
  color: ${C_WHITE};
  padding: ${GEL_SPACING};
  border: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${GEL_SPACING_DBL} ${GEL_MARGIN_BELOW_400PX};

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_MARGIN_ABOVE_400PX};
  }
`;

const GuidanceMessage = styled.span`
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_MARGIN_ABOVE_400PX};
  }
`;

const IconWrapper = styled.div`
  > svg {
    color: ${C_WHITE};
    fill: currentColor;
  }
`;

const Guidance = ({ className, message, service, children }) => {
  return (
    <StyledGuidance className={className} service={service}>
      {message && (
        <GuidanceWrapper>
          <Content>
            <IconWrapper aria-hidden="true">
              <GuidanceIcon />
            </IconWrapper>
            <GuidanceMessage>Guidance: {message}</GuidanceMessage>
          </Content>
        </GuidanceWrapper>
      )}
      {children}
    </StyledGuidance>
  );
};

Guidance.propTypes = {
  message: string,
  className: string,
  service: string.isRequired,
  children: node,
};

Guidance.defaultProps = {
  message: null,
  className: null,
  children: null,
};

export default Guidance;
