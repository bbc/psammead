import styled from 'styled-components';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { MEDIA_QUERY_TYPOGRAPHY } from '@bbc/gel-foundations/breakpoints';
import { GEL_LONG_PRIMER } from '@bbc/gel-foundations/typography';
import { C_STONE, C_STORM } from '@bbc/psammead-styles/colours';
import { FF_NEWS_SANS_REG } from '@bbc/psammead-styles/fonts';

const Caption = styled.figcaption`
  ${GEL_LONG_PRIMER};
  background-color: ${C_STONE};
  color: ${C_STORM};
  font-family: ${FF_NEWS_SANS_REG};
  padding: ${GEL_SPACING};
  width: 100%;
  ${MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER} {
    padding: ${GEL_SPACING} ${GEL_SPACING_DBL};
  }
`;

export default Caption;
