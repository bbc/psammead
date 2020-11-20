import React from 'react';
import { node } from 'prop-types';

import styled from '@emotion/styled';
import { getPica } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';

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
  margin-right: ${GEL_SPACING};
`;

const CardCallToAction = ({ children, ...props }) => (
  <span aria-hidden="true">
    <StyledSeriesStackIcon />
    <CallToActionText {...props}>{children}</CallToActionText>
  </span>
);

CardCallToAction.propTypes = {
  children: node.isRequired,
};

export default CardCallToAction;
