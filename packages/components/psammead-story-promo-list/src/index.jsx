import styled from 'styled-components';
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

export const StoryPromoLi = styled.li`
  border-bottom: 0.0625rem solid ${C_LUNAR};
  padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL} 0 ${GEL_SPACING_DBL};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_TRPL} 0 ${GEL_SPACING_TRPL};
  }

  &:last-child {
    border: none;
  }
`;

export const StoryPromoUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
