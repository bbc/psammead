import styled from '@emotion/styled';

import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { C_WHITE } from '@bbc/psammead-styles/colours';

const Card = styled.div`
  position: relative;
  background-color: ${C_WHITE};
  &:hover {
    .podcast-promo__hover {
      text-decoration: underline;
    }
  }
`;

export default Card;
