import styled from 'styled-components';
import { C_LUNAR } from '@bbc/psammead-styles/colours';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';

const PromoSeparator = styled.hr`
  color: ${C_LUNAR};
  margin: ${GEL_SPACING} 0 ${GEL_SPACING_DBL};
  height: 0.0625rem;
`;

export default PromoSeparator;
