import styled from '@emotion/styled';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { getPica } from '@bbc/gel-foundations/typography';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Title = styled.span`
  ${({ script }) => getPica(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_EBON};
  display: block;
  font-weight: 700;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    font-size: 16px;
  }
`;

export default Title;
