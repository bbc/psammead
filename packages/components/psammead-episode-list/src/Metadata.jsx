import styled from '@emotion/styled';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { C_METAL, C_PEBBLE } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Metadata = styled.span`
  ${({ script }) => getBrevier(script)};
  ${({ service }) => getSansRegular(service)}
  display: block;
  color: ${({ darkMode }) => (darkMode ? C_PEBBLE : C_METAL)};
`;

export default Metadata;
