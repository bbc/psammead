import styled from 'styled-components';

import { C_METAL } from '@bbc/psammead-styles/colours';

import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Description = styled.span`
  ${({ service }) => getSansRegular(service)}
  display: block;
  font-size: 14px;
  line-height: 18px;
  color: ${C_METAL};
  text-decoration: none !important;
  span {
    text-decoration: none !important;
  }
`;

export default Description;
