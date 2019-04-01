import styled, { css } from 'styled-components';
import {
  GEL_SPACING,
  GEL_MARGIN_ABOVE_400PX,
  GEL_MARGIN_BELOW_400PX,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_LONG_PRIMER,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';

import { C_CLOUD_DARK } from '@bbc/psammead-styles/colours';

// Defined separately since in future will need to apply
// only when the script supports italic text
const FS_ITALIC = css`
  font-style: italic;
`;

const Caption = styled.figcaption`
  ${GEL_LONG_PRIMER};
  color: ${C_CLOUD_DARK};
  font-family: ${GEL_FF_REITH_SANS};
  ${FS_ITALIC};
  padding: ${GEL_SPACING} 0;
  width: 100%;

  @media (max-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING} ${GEL_MARGIN_BELOW_400PX};
  }
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: ${GEL_SPACING} ${GEL_MARGIN_ABOVE_400PX};
  }
`;

export default Caption;
