import React from 'react';
import { node, oneOf, shape, string, number, arrayOf } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap, getDoublePica } from '@bbc/gel-foundations/typography';
import {
  GEL_SPACING,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_1_SCREEN_WIDTH_MIN,
  GEL_GROUP_0_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getSerifLight,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';
import { itemPropTypes } from '../List';

const paddingStart = ({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}`;
const widthService = (service, value) =>
  service === 'bengali' ? '3rem' : value;

const widthTest = (service, bValue, elseValue) =>
  service === 'bengali' ? bValue : elseValue;

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

const StyledWrapper = styled.div`
  min-width: ${props => (props.service === 'bengali' ? '1rem' : '3rem')};

  @media (min-width: ${GEL_GROUP_0_SCREEN_WIDTH_MIN}) {
    min-width: ${props => (props.items.length >= 10 ? '2rem' : 'auto')};
  }

  @media (min-width: ${GEL_GROUP_1_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.items.length >= 10
        ? widthTest(props.service, '2rem', '3rem')
        : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listindex >= 5 && props.items.length >= 10 ? '3rem' : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listindex >= 5 ? widthService(props.service, '4rem') : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listindex === 4 && props.items.length >= 10
        ? widthService(props.service, '4.2rem')
        : 'auto'};
  }
`;

const StyledItem = styled.div`
  padding-bottom: ${GEL_SPACING_TRPL};
  ${paddingStart}: 16px;
`;

export const MostReadRank = styled.span`
  ${({ service }) => getSerifLight(service)}
  ${({ script }) => script && getFoolscap(script)};
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding: 0;
  display: inline-block;
  width: auto;
  float: ${props => (props.dir === 'rtl' ? 'right' : 'left')};
`;

export const MostReadNumber = ({
  service,
  script,
  rank,
  listindex,
  items,
  dir,
}) => (
  <StyledWrapper
    listindex={listindex}
    service={service}
    items={items}
    dir={dir}
  >
    <MostReadRank service={service} script={script} dir={dir}>
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
  dir: oneOf(['rtl', 'ltr']),
};

MostReadRank.defaultProps = {
  dir: 'ltr',
};

MostReadNumber.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  rank: number,
  listindex: number.isRequired,
  items: arrayOf(itemPropTypes).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadNumber.defaultProps = {
  rank: null,
  dir: 'ltr',
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
