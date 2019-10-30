import React from 'react';
import { oneOf, shape, string } from 'prop-types';
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

export const ItemWrapper = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  text-decoration: none;
  padding-bottom: ${GEL_SPACING};
  
  &:hover,
  &:focus {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const MostRead = ({ count, item: { header, href }, ...props }) => (
  <MostReadWrapper {...props}>
    <CountWrapper {...props}>{count}</CountWrapper>
    <ItemWrapper href={href} {...props}>
      {header}
    </ItemWrapper>
  </MostReadWrapper>
);

MostRead.propTypes = {
  dir: string,
  count: string.isRequired,
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  item: shape({
    header: string.isRequired,
    href: string.isRequired,
  }).isRequired,
};

MostRead.defaultProps = {
  dir: oneOf(['rtl', 'ltr']),
};

export default MostRead;
