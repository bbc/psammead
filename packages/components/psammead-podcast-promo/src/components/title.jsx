import React from 'react';
import styled from '@emotion/styled';
import { node } from 'prop-types';

import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { getGreatPrimer } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { C_EBON } from '@bbc/psammead-styles/colours';

import PodcastIcon from '../icons/podcast';

const Heading = styled.h2`
  ${({ script }) => getGreatPrimer(script)};
  ${({ service }) => getSansRegular(service)};
  display: inline;
  color: ${C_EBON};
`;

const Wrapper = styled.div`
  margin: 0 0 ${GEL_SPACING_DBL};
`;

const Title = ({ children, ...props }) => (
  <Wrapper>
    <PodcastIcon />
    <Heading {...props}>{children}</Heading>
  </Wrapper>
);

Title.propTypes = {
  children: node.isRequired,
};

export default Title;
