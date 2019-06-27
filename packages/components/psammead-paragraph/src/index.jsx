import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const Paragraph = styled.p`
  ${props => (props.script ? getBodyCopy(props.script) : '')};
  ${props => getSansRegular(props.product)};
  color: ${C_SHADOW};
  padding-bottom: ${GEL_SPACING_TRPL};
  margin: 0; /* Reset */
`;

Paragraph.propTypes = {
  product: string,
  script: shape(scriptPropType).isRequired,
};

Paragraph.defaultProps = {
  product: 'news',
};

export default Paragraph;
