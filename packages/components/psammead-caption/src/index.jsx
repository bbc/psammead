import styled from '@emotion/styled';
import { shape, string } from 'prop-types';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_MARGIN_BELOW_400PX,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_1_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { getLongPrimer } from '@bbc/gel-foundations/typography';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';

const Caption = styled.figcaption`
  ${({ script }) => script && getLongPrimer(script)};
  ${({ service }) => getSansRegular(service)}
  color: ${C_METAL};
  padding: 0 ${GEL_MARGIN_BELOW_400PX} 0;
  width: 100%;
  border-left: 1px solid ${C_METAL};
  @media (min-width: ${GEL_GROUP_1_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    margin-left: ${GEL_SPACING};
  }
  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    margin-left: ${GEL_SPACING_DBL};
  }
  & > p {
    padding-bottom: ${GEL_SPACING_TRPL};
    margin: 0; /* reset */
  }
  & > p:last-child {
    padding-bottom: 0;
  }
  & i {
    font-style: normal;
  }
`;

Caption.propTypes = {
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
};

export default Caption;
