import styled from '@emotion/styled';
import { C_WHITE } from '@bbc/psammead-styles/colours';

const Card = styled.div`
  position: relative;
  background-color: ${C_WHITE};
  &:hover {
    .podcast-promo--hover {
      text-decoration: underline;
    }
  }
`;

export default Card;
