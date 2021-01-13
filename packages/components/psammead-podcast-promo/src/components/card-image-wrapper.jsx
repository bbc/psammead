import styled from '@emotion/styled';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_B_MIN_WIDTH,
} from '@bbc/gel-foundations/breakpoints';

const CardImageWrapper = styled.div`
  flex: 0 0 5.5rem;
  margin: ${GEL_SPACING} 0 0 ${GEL_SPACING};
  @media (max-width: ${GEL_GROUP_B_MIN_WIDTH}rem) {
    display: none;
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    flex: 0 0 6.8125rem;
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    flex: 0 0 11.125rem;
    margin: 0;
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    width: 100%;
    margin: 0;
  }
`;

export default CardImageWrapper;
