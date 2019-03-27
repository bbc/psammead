import styled from 'styled-components';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import {
  GEL_BODY_COPY,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';

const Paragraph = styled.p`
  color: ${C_SHADOW};
  font-family: ${GEL_FF_REITH_SANS};
  margin: 0; /* Reset */
  ${GEL_BODY_COPY};
`;

export default Paragraph;
