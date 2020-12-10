import styled from '@emotion/styled';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const CardImageWrapper = styled.div`
  width: 5.5rem; // 88px
  display: inline-block;
  vertical-align: top;
  margin: ${GEL_SPACING} 0 0 ${GEL_SPACING};
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    width: 6.8125rem; // 109px
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: 11.125rem; // 178px
    margin: 0;
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    width: 100%;
    margin: 0;
  }
`;

export default CardImageWrapper;
