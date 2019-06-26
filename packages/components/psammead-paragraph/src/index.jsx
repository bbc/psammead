import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import {
  getBodyCopy,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const Paragraph = styled.p`
  ${props => (props.script ? getBodyCopy(props.script) : '')};
  color: ${C_SHADOW};
  font-family: ${GEL_FF_REITH_SANS};
  padding-bottom: ${GEL_SPACING_TRPL};
  margin: 0; /* Reset */
`;

Paragraph.propTypes = {
  product: string.isRequired,
  script: shape(scriptPropType).isRequired,
};

export default Paragraph;
