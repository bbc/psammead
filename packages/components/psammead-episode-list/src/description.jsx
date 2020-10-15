import styled from 'styled-components';
import { getLongPrimer } from '@bbc/gel-foundations/typography';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Description = styled.span`
  ${({ script }) => getLongPrimer(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  display: block;
  margin: 4px 0;
`;

export default Description;
