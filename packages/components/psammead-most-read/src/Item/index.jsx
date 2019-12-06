import React from 'react';
import { node, oneOf, shape, string, number, arrayOf } from 'prop-types';
import styled from 'styled-components';
import { getFoolscap, getDoublePica } from '@bbc/gel-foundations/typography';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_0_SCREEN_WIDTH_MIN,
  GEL_GROUP_1_SCREEN_WIDTH_MIN,
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  getSerifLight,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';

const paddingStart = ({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}`;

const isBengali = (service, yes, no) => (service === 'bengali' ? yes : no);

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
        ? isBengali(props.service, '2rem', '3rem')
        : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listindex >= 5 && props.items.length >= 10
        ? isBengali(props.service, '2rem', '3rem')
        : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listindex >= 5 && props.items.length >= 10
        ? isBengali(props.service, '3rem', '4rem')
        : 'auto'};
  }

  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    min-width: ${props =>
      props.listindex === 4 && props.items.length >= 10
        ? isBengali(props.service, '3rem', '4.2rem')
        : 'auto'};
  }
`;

// const StyledWrapper = styled.div`
//   min-width: ${props => (props.service === 'bengali' ? '1rem' : '3rem')};
//
//   @media (min-width: ${GEL_GROUP_0_SCREEN_WIDTH_MIN}) {
//     min-width: ${props => (props.items.length >= 10 ? '2rem' : 'auto')};
//   }
//
//   @media (min-width: ${GEL_GROUP_1_SCREEN_WIDTH_MIN}) {
//     min-width: ${props => (props.items.length >= 10 ? '3rem' : 'auto')};
//   }
//
//   @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
//     min-width: ${props =>
//       props.listindex >= 5 && props.items.length >= 10 ? '3rem' : 'auto'};
//   }
//
//   @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
//     min-width: ${props => (props.listindex >= 5 ? '4rem' : 'auto')};
//   }
//
//   @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
//     min-width: ${props =>
//       props.listindex === 4 && props.items.length >= 10 ? '4.2rem' : 'auto'};
//   }
// `;

const StyledItem = styled.div`
  ${paddingStart}: 16px;
  padding-bottom: ${GEL_SPACING_TRPL};
`;

export const MostReadRank = styled.span`
  ${({ service }) => getSerifLight(service)}
  ${({ script }) => script && getFoolscap(script)};
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding: 0;
  float: ${props => (props.dir === 'rtl' ? 'right' : 'left')};
`;

export const MostReadRankWrapper = ({
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

export const itemPropTypes = shape({
  title: string.isRequired,
  href: string.isRequired,
});

MostReadRankWrapper.propTypes = {
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  rank: string,
  listindex: number.isRequired,
  items: arrayOf(itemPropTypes).isRequired,
  dir: oneOf(['rtl', 'ltr']),
};

MostReadRankWrapper.defaultProps = {
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
