import React from 'react';
import { node } from 'prop-types';

import styled from '@emotion/styled';
import { getPica } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { C_METAL } from '@bbc/psammead-styles/colours';

import SeriesStackIcon from '../icons/series-stack';

const EpisodesText = styled.p`
  display: inline;
  ${({ script }) => getPica(script)};
  ${({ service }) => getSansRegular(service)};
  color: ${C_METAL};
`;
const CardEpisodesText = ({ children, ...props }) => (
  <>
    <SeriesStackIcon />
    <EpisodesText {...props}>{children}</EpisodesText>
  </>
);

CardEpisodesText.propTypes = {
  children: node.isRequired,
};

export default CardEpisodesText;
