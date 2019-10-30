import React from 'react';
import { node, oneOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import { getCanon, getPica } from '@bbc/gel-foundations/typography';
import { C_EBON, C_POSTBOX } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import {
  getSerifLight,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';

const MostReadWrapper = styled.div`
  display: flex;

  @media (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin-top: 4px;
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin-top: 6px;
  }
`;

const ItemWrapper = styled.div``;

export const CountWrapper = styled.p`
  ${({ script }) => script && getCanon(script)};
  ${({ service }) => getSerifLight(service)}
  color: ${C_POSTBOX};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
  display: inline-block;
  min-width: 3rem;
  
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: 4rem;
  }
`;

export const TitleWrapper = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  text-decoration: none;
  padding-bottom: ${GEL_SPACING};
  
  &:hover,
  &:focus {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const MostReadItem = ({
  count,
  lastUpdated,
  item: { title, href },
  ...props
}) => (
  <MostReadWrapper {...props}>
    <CountWrapper {...props}>{count}</CountWrapper>
    <ItemWrapper>
      <TitleWrapper href={href} {...props}>
        {title}
      </TitleWrapper>
      {lastUpdated}
    </ItemWrapper>
  </MostReadWrapper>
);

MostReadItem.propTypes = {
  dir: string,
  count: string.isRequired,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  lastUpdated: node,
  item: shape({
    title: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

MostReadItem.defaultProps = {
  dir: oneOf(['rtl', 'ltr']),
  lastUpdated: null,
};

export default MostReadItem;
