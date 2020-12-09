import React from 'react';
import { node } from 'prop-types';

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
const CardCallToAction = ({ children, ...props }) => (
  <p>
    <SeriesStackIcon focusable="false" />
    <CallToActionText {...props}>{children}</CallToActionText>
  </p>
);

CardCallToAction.propTypes = {
  children: node.isRequired,
};

export default CardCallToAction;
