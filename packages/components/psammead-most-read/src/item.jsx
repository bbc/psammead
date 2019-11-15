import React from 'react';
import { node, shape, string } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap, getDoublePica } from '@bbc/gel-foundations/typography';
import {
  GEL_SPACING_HLF,
  GEL_SPACING,
  GEL_SPACING_DBL,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getSerifLight,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';

export const MostReadRank = styled.span`
  ${({ script }) => script && getFoolscap(script)};
  ${({ service }) => getSerifLight(service)}
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding: 0;
  display: inline-block;
  width: 3rem;
`;

const StyledLink = styled.a`
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  
  text-decoration: none;
  
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const StyledItem = styled.div`
  padding-top: ${GEL_SPACING_HLF};
  padding-left: ${GEL_SPACING_HLF};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding-top: ${GEL_SPACING};
    padding-left: ${GEL_SPACING_DBL};
  }
`;

export const MostReadLink = ({
  lastUpdated,
  script,
  service,
  link: { title, href },
}) => (
  <StyledItem>
    <StyledLink href={href} script={script} service={service}>
      {title}
    </StyledLink>
    {lastUpdated}
  </StyledItem>
);

MostReadRank.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
};

MostReadLink.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  lastUpdated: node,
  link: shape({
    title: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

MostReadLink.defaultProps = {
  lastUpdated: null,
};
