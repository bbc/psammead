import styled from '@emotion/styled';
import { C_GHOST } from '@bbc/psammead-styles/colours';

const Card = styled.div`
  position: relative;
  background-color: ${C_GHOST};
  &:hover {
    .podcast-promo--hover {
      text-decoration: underline;
    }
  }
`;

export default Card;
