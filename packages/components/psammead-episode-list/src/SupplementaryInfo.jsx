import styled from '@emotion/styled';
import { getBrevier } from '@bbc/gel-foundations/typography';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { C_METAL, C_PEBBLE, C_CLOUD_LIGHT } from '@bbc/psammead-styles/colours';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

import { withEpisodeContext } from './helpers';

const borderStyling = `
  padding-left: ${GEL_SPACING};
  margin-left: ${GEL_SPACING};
  border-left: 0.0625rem solid ${C_CLOUD_LIGHT};
`;

const SupplementaryInfo = styled.span`
  ${({ script }) => getBrevier(script)}
  ${({ service }) => getSansRegular(service)}
  color: ${({ darkMode }) => (darkMode ? C_PEBBLE : C_METAL)};
  ${({ hasBorder }) => hasBorder && borderStyling}
`;

export default withEpisodeContext(SupplementaryInfo);
