import React from 'react';
import styled from 'styled-components';
// import { shape, string, array } from 'prop-types';
// import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { getPica } from '@bbc/gel-foundations/typography';
import { string, arrayOf, shape } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_SPACING, // 8 px
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';

const UsefulLinkWrapper = styled.div`
  padding-top: ${GEL_SPACING};
`;

export const UsefulLinkItem = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => getSerifMedium(service)};
  color: ${C_EBON};
  &:hover,
  &:focus {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const UsefulLinksUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

export const UsefulLinksLi = styled.li`
  padding-top: ${GEL_SPACING};
`;

export const UsefulLink = ({ usefulItems, service, script }) => (
  <UsefulLinkWrapper>
    <UsefulLinkItem service={service} sript={script} usefulItems={usefulItems}>
      {usefulItems[0]}
    </UsefulLinkItem>
  </UsefulLinkWrapper>
);

UsefulLink.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  usefulItems: arrayOf(string).isRequired,
};
