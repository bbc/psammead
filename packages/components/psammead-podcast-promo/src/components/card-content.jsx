import styled from '@emotion/styled';

import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const CardContent = styled.div`
  padding: ${GEL_SPACING};
  display: inline-block;
  max-width: calc(100% - 96px);
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
    max-width: calc(100% - 117px);
  }
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
    max-width: calc(100% - 178px);
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING_DBL};
    max-width: initial;
  }
`;

export default CardContent;
