import React from 'react';
import { node, oneOf, shape, string, number, arrayOf } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap, getDoublePica } from '@bbc/gel-foundations/typography';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getSerifLight,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';
import { itemPropTypes } from '../List';

const paddingStart = ({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}`;
const widthService = ({ service }) =>
  `${service === 'bengali' ? '3rem' : '70px'}`;
const bengaliNumeralsSuck = ({ service }) =>
  `${service === 'bengali' ? '3rem' : '4rem'}`;

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

const StyledWrapper = styled.div`
  display: inline-block;
  float: left;
  min-width: 2rem;

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listindex >= 5 && props.items.length >= 10 ? '3rem' : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listindex >= 5 && props.listindex <= 10 ? widthService : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listindex === 4 && props.items.length >= 10
        ? bengaliNumeralsSuck
        : 'auto'};
  }
`;

const StyledItem = styled.div`
  padding-bottom: ${GEL_SPACING_TRPL};
  ${paddingStart}: 16px;

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    padding-top: ${GEL_SPACING};
    ${paddingStart}: 16px;
    margin-left: 0;
  }
`;

export const MostReadRank = styled.span`
  ${({ service }) => getSerifLight(service)}
  ${({ script }) => script && getFoolscap(script)};
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding: 0;
  display: inline-block;
  width: auto;
  float: left;
`;

export const MostReadNumber = ({ service, script, rank, listindex, items }) => (
  <StyledWrapper listindex={listindex} service={service} items={items}>
    <MostReadRank service={service} script={script}>
      {rank}
    </MostReadRank>
  </StyledWrapper>
);

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
};

MostReadNumber.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  rank: number,
  listindex: number.isRequired,
  items: arrayOf(itemPropTypes).isRequired,
};

MostReadNumber.defaultProps = {
  rank: null,
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
  listindex: string.isRequired,
};

MostReadLink.defaultProps = {
  lastUpdated: null,
  dir: 'ltr',
};
