import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import { C_LUNAR } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const StyledListItem = styled.li`
  border-bottom: 0.0625rem solid ${C_LUNAR};
  padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING_DBL};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_TRPL} 0 ${GEL_SPACING_TRPL};
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border: none;
  }
`;

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StoryPromoUl = ({ children, ...props }) => (
  <StyledUnorderedList role="list" {...props}>
    {children}
  </StyledUnorderedList>
);

export const StoryPromoLi = ({ children, ...props }) => (
  <StyledListItem role="listitem" {...props}>
    {children}
  </StyledListItem>
);

StoryPromoUl.propTypes = {
  children: node.isRequired,
};

StoryPromoLi.propTypes = {
  children: node.isRequired,
};
