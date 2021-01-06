import styled from '@emotion/styled';
import { C_GHOST } from '@bbc/psammead-styles/colours';
import { GEL_GROUP_4_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';

const Card = styled.div`
  position: relative;
  background-color: ${C_GHOST};
  display: flex;

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    flex-direction: column;
  }
  &:hover {
    .podcast-promo--hover {
      text-decoration: underline;
    }
  }
`;

export default Card;
