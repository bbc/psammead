import styled from 'styled-components';
import { shape, string } from 'prop-types';
import {
  GEL_SPACING,
  GEL_SPACING_TRPL,
  GEL_MARGIN_BELOW_400PX,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { getLongPrimer } from '@bbc/gel-foundations/typography';
import { C_METAL } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { getSansRegularItalic } from '@bbc/psammead-styles/font-styles';

const Caption = styled.figcaption`
  ${({ script }) => script && getLongPrimer(script)};
  ${({ service }) => getSansRegularItalic(service)}
  color: ${C_METAL};
  padding: ${GEL_SPACING} ${GEL_MARGIN_BELOW_400PX} 0;
  width: 100%;
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}){
    padding: ${GEL_SPACING} 0 0;
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
