import styled from 'styled-components';
import { C_WHITE } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_HLF } from '@bbc/gel-foundations/spacings';
import { GEL_MINION, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';

const Copyright = styled.p.attrs({
  role: 'text',
  lang: 'en-gb',
})`
  ${GEL_MINION};
  background-color: rgba(34, 34, 34, 0.75);
  text-transform: uppercase;
  color: ${C_WHITE};
  padding: ${GEL_SPACING_HLF} ${GEL_SPACING};
  font-family: ${GEL_FF_REITH_SANS};
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
`;

export default Copyright;
