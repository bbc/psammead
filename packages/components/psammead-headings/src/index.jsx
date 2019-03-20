import styled from 'styled-components';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING_DBL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_CANON,
  GEL_TRAFALGAR,
  GEL_F_REITH_SERIF,
  GEL_F_REITH_SANS_SERIF,
  getFontFamily,
} from '@bbc/gel-foundations/typography';

export const Headline = styled.h1`
  color: ${C_SHADOW};
  font-family: ${({ script }) => getFontFamily(GEL_F_REITH_SERIF, script)};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING_QUAD} 0 ${GEL_SPACING_DBL} 0;
  font-weight: 500;
  ${GEL_CANON};
`;

const regexPunctuationSymbols = /[^a-z0-9\s-]/gi;
const regexSpaces = /\s+/g;

export const SubHeading = styled.h2.attrs(({ text }) => ({
  id: text.replace(regexPunctuationSymbols, '').replace(regexSpaces, '-'),
  tabIndex: '-1',
}))`
  color: ${C_SHADOW};
  font-family: ${({ script }) => getFontFamily(GEL_F_REITH_SANS_SERIF, script)};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING_DBL} 0;
  font-weight: 700;
  ${GEL_TRAFALGAR};
`;
