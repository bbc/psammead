import styled, { css } from 'styled-components';
import { objectOf, object } from 'prop-types';
import {
  GEL_SPACING,
  GEL_MARGIN_ABOVE_400PX,
  GEL_MARGIN_BELOW_400PX,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  getLongPrimer,
  GEL_FF_REITH_SANS,
} from '@bbc/gel-foundations/typography';

import { C_CLOUD_DARK } from '@bbc/psammead-styles/colours';

// Defined separately since in future will need to apply
// only when the script supports italic text
const FS_ITALIC = css`
  font-style: italic;
`;

const Caption = styled.figcaption`
  ${props => (props.script ? getLongPrimer(props.script) : '')};
  color: ${C_CLOUD_DARK};
  font-family: ${GEL_FF_REITH_SANS};
  ${FS_ITALIC};
  padding: ${GEL_SPACING} ${GEL_MARGIN_BELOW_400PX};
  width: 100%;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    padding: ${GEL_SPACING} ${GEL_MARGIN_ABOVE_400PX};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING} 0;
  }
`;

Caption.propTypes = {
  script: objectOf(object).required,
};

export default Caption;
