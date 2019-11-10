import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { GEL_SPACING_QUAD } from '@bbc/gel-foundations/spacings';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansBold } from '@bbc/psammead-styles/font-styles';
import { getDoublePica } from '@bbc/gel-foundations/typography';

const Synopsis = styled.p`
  ${({ script }) => script && getDoublePica(script)};
  ${({ service }) => getSansBold(service)};
  color: ${C_METAL};
  padding: 0 0 ${GEL_SPACING_QUAD} 0;
  margin: 0; /* Reset */
`;

Synopsis.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

export default Synopsis;
