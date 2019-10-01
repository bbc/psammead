import React from 'react';
import styled from 'styled-components';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import { C_EBON, C_METAL } from '@bbc/psammead-styles/colours';
import { grid } from '@bbc/psammead-styles/detection';
import { getPica } from '@bbc/gel-foundations/typography';
import { string, shape, node } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import {
  GEL_SPACING, // 8 px
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';

export const UsefulLinkItem = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => service && getSerifMedium(service)};
  color: ${C_EBON};
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:visited {
    color: ${C_METAL};
  }
`;

const StyledUsefulLinksUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    @supports (${grid}) {
      display: grid;
      grid-template-columns: auto auto;
    }
  }
`;

export const UsefulLinksUl = ({ children, ...props }) => (
  <StyledUsefulLinksUl role="list" {...props}>
    {children}
  </StyledUsefulLinksUl>
);

const StyledUsefulLinksLi = styled.li`
  padding-top: ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    @supports not (${grid}) {
      display: inline-block;
      min-width: 50%;
    }
  }
`;

export const UsefulLinksLi = ({ children, ...props }) => (
  <StyledUsefulLinksLi role="listitem" {...props}>
    {children}
  </StyledUsefulLinksLi>
);

export const UsefulLink = ({ children, service, script, url }) => (
  <UsefulLinkItem service={service} script={script} href={url}>
    {children}
  </UsefulLinkItem>
);

UsefulLink.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  children: node.isRequired,
  url: string.isRequired,
};

UsefulLinksUl.propTypes = {
  children: node.isRequired,
};

UsefulLinksLi.propTypes = {
  children: node.isRequired,
};
