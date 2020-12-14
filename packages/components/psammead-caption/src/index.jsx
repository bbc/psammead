import styled from '@emotion/styled';
import { oneOf, shape, string } from 'prop-types';
import {
  GEL_SPACING,
  GEL_SPACING_TRPL,
  GEL_MARGIN_ABOVE_400PX,
  GEL_MARGIN_BELOW_400PX,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getLongPrimer } from '@bbc/gel-foundations/typography';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

/* TODO: Update padding/margin for 2nd media query */

const Caption = styled.figcaption`
  ${({ script }) => script && getLongPrimer(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_METAL};
  padding: ${GEL_SPACING} ${GEL_MARGIN_BELOW_400PX} 0;
  width: 100%;
  ${({ dir }) =>
    dir === 'rtl'
      ? `border-right: 1px solid ${C_METAL};`
      : `border-left: 1px solid ${C_METAL};`}
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    ${({ dir }) =>
      dir === 'rtl'
        ? `padding: ${GEL_SPACING} ${GEL_SPACING} 0 0;`
        : `padding: ${GEL_SPACING} 0 0 ${GEL_SPACING};`}
    ${({ dir }) =>
      dir === 'rtl'
        ? `margin-right: ${GEL_MARGIN_ABOVE_400PX};`
        : `margin-left: ${GEL_MARGIN_ABOVE_400PX};`}
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    padding: ${GEL_SPACING} 0 0;
  }
  & > p {
    padding-bottom: ${GEL_SPACING_TRPL};
    margin: 0; /* reset */
  }
  & > p:last-child {
    padding-bottom: 0;
  }
`;

Caption.propTypes = {
  script: shape(scriptPropType).isRequired,
  dir: oneOf(['ltr', 'rtl']),
  service: string.isRequired,
};

Caption.defaultProps = {
  dir: 'ltr',
};

export default Caption;
