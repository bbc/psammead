import React from 'react';

import styled from '@emotion/styled';
import { getPica } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { C_METAL } from '@bbc/psammead-styles/colours';

import SeriesStackIcon from '../icons/series-stack';

const CallToActionText = styled.span`
  ${({ script }) => getPica(script)};
  ${({ service }) => getSansRegular(service)};
  color: ${C_METAL};
`;

const StyledSeriesStackIcon = styled(SeriesStackIcon)`
  width: 12px;
  color: ${C_METAL};
  fill: currentColor;
  position: relative;
  top: 2px;
  margin-right: 8px;
`;

const CardCallToAction = ({ children, ...props }) => {
  return (
    <span>
      <StyledSeriesStackIcon />
      <CallToActionText {...props}>{children}</CallToActionText>
    </span>
  );
};

export default CardCallToAction;
