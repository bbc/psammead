import styled from 'styled-components';

import { C_EBON } from '@bbc/psammead-styles/colours';

import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';

import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Title = styled.span`
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  display: block;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    font-size: 16px;
  }
`;

export default Title;
