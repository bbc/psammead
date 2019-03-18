import styled, { css } from 'styled-components';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { MEDIA_QUERY_TYPOGRAPHY } from '@bbc/gel-foundations/breakpoints';
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
  padding: ${GEL_SPACING};
  width: 100%;
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
  }
`;

export default Caption;
