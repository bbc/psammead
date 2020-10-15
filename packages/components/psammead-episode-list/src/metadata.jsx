import styled from 'styled-components';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Metadata = styled.span`
  ${({ script }) => getBrevier(script)};
  ${({ service }) => getSansRegular(service)}
  display: block;
  color: ${C_METAL};
`;

export default Metadata;
