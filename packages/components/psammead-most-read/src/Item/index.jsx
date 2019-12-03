import React from 'react';
import { node, oneOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap, getDoublePica } from '@bbc/gel-foundations/typography';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_5_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getSerifLight,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';

const paddingStart = ({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}`;

const StyledLink = styled.a`
  color: ${C_EBON};
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSerifMedium(service)}
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const StyledItem = styled.div`
  padding-bottom: ${GEL_SPACING_TRPL};
  ${paddingStart}: 16px;
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    padding-top: ${GEL_SPACING};
    ${paddingStart}: 32px;
  }
`;

export const MostReadRank = styled.span`
  ${({ service }) => getSerifLight(service)}
  ${({ script }) => script && getFoolscap(script)};
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding: 0;
  display: inline-block;
  width: ${props =>
    props.listindex >= 5 && props.listindex < 10 ? 'auto' * 2 : 'auto'};
`;

export const MostReadLink = ({
  link: { title, href },
  lastUpdated,
  service,
  script,
  dir,
}) => (
  <StyledItem dir={dir}>
    <StyledLink href={href} script={script} service={service}>
      {title}
    </StyledLink>
    {lastUpdated}
  </StyledItem>
);

MostReadRank.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  listindex: string.isRequired,
};

MostReadLink.propTypes = {
  link: shape({
    title: string.isRequired,
    href: string.isRequired,
  }).isRequired,
  lastUpdated: node,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadLink.defaultProps = {
  lastUpdated: null,
  dir: 'ltr',
};
