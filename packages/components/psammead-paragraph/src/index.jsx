import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { C_SHADOW } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { GEL_SPACING_TRPL } from '@bbc/gel-foundations/spacings';
import { getBodyCopy } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const Paragraph = styled.p`
  ${props => (props.script ? getBodyCopy(props.script) : '')};
  ${props => getSansRegular(props.service)};
  color: ${C_SHADOW};
  padding-bottom: ${GEL_SPACING_TRPL};
  margin: 0; /* Reset */
`;

Paragraph.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string,
  // service: oneOf(arrayOfValidServiceNames) // do we have this array somewhere?
};

Paragraph.defaultProps = {
  service: 'news',
};

export default Paragraph;
