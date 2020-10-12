import styled from 'styled-components';

import { C_EBON } from '@bbc/psammead-styles/colours';

import { GEL_GROUP_4_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';

import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Description = styled.span`
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  display: block;
  font-size: 15px;
  line-height: 18px;
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    font-size: 14px;
  }
  margin: 4px 0;
`;

export default Description;
