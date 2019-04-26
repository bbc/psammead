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

const PromoSeparator = styled.div`
  background-color: ${C_LUNAR};
  margin: ${GEL_SPACING_DBL} 0 ${GEL_SPACING};
  height: 1px;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin: ${GEL_SPACING_DBL} 0 ${GEL_SPACING_DBL};
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    margin: ${GEL_SPACING_TRPL} 0 ${GEL_SPACING_TRPL};
  }
`;

export default PromoSeparator;
