import React from 'react';
import styled from 'styled-components';
import {
  getSansRegular,
  getSerifMedium,
} from '@bbc/psammead-styles/font-styles';
import { C_EBON, C_PEBBLE } from '@bbc/psammead-styles/colours';
import { getPica } from '@bbc/gel-foundations/typography';
import {
  GEL_SPACING_DBL, // 16 px
  GEL_SPACING, // 8 px
  GEL_SPACING_TRPL, // 24 px
  GEL_SPACING_QUAD, // 32 px
} from '@bbc/gel-foundations/spacings';

const HorizontalBar = styled.div`
  border-top: 0.0625rem solid ${C_PEBBLE};
  width: 224px;
  margin-top: ${GEL_SPACING_QUAD};
`;

const Caption = styled.h2`
  ${({ service }) => getSansRegular(service)};
  color: ${C_EBON};
  margin-top: ${GEL_SPACING_DBL};
  margin-bottom: ${GEL_SPACING_TRPL};
`;

const UsefulLinkWrapper = styled.div``;

const UsefulLink = styled.a`
  color: ${C_EBON};
  ${({ script }) => script && getPica(script)};
  ${({ service }) => getSerifMedium(service)};
  &:hover,
  &:focus {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const UsefulLinksUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const UsefulLinksLi = styled.li`
  padding-bottom: ${GEL_SPACING};
`;

const UsefulLinks = usefulItems => (
  <div>
    <HorizontalBar />
    <Caption>Useful links</Caption>
    {usefulItems.length === 1 ? (
      <UsefulLinkWrapper>
        <UsefulLink>usefulItems[0]</UsefulLink>
      </UsefulLinkWrapper>
    ) : (
      <UsefulLinksUl role="list" usefulItems={usefulItems}>
        {usefulItems.usefulItems.map(item => {
          return (
            <UsefulLinksLi role="listitem">
              <UsefulLink>{item}</UsefulLink>
            </UsefulLinksLi>
          );
        })}
      </UsefulLinksUl>
    )}
  </div>
);

export default UsefulLinks;
