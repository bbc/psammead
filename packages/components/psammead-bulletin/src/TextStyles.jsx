import styled, { css } from 'styled-components';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { grid } from '@bbc/psammead-styles/detection';

const fourOfSixColumnsMaxWidthScaleable = `66.67%`;
// (4 / 6) * 100 = 66.6666666667 = 66.67%

const fullWidthColumnsMaxScaleable = `100%`;
// (12 / 12) * 100 = 100 = 100%

const halfWidthColumnsMaxScaleable = `50%`;

const textWrapperStyles = `
  display: inline-block;
  grid-column: 1 / span 6;
  width: ${fullWidthColumnsMaxScaleable};
  @supports (${grid}) {
    width: initial;
    padding: 0;
  }
`;

const TextGridRadio = css`
  grid-column: 3 / span 4;
  width: ${fourOfSixColumnsMaxWidthScaleable};
`;

const TextGridTv = css`
  grid-column: 4 / span 3;
  width: ${halfWidthColumnsMaxScaleable};
`;

const textGridStyles = {
  radio: TextGridRadio,
  tv: TextGridTv,
};

const TextGridItem = styled.div`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    ${({ bulletinType }) => textGridStyles[bulletinType]}
    ${({ dir }) =>
      dir === 'ltr'
        ? `padding-left: ${GEL_SPACING_DBL};`
        : `padding-right: ${GEL_SPACING_DBL};`}
  }
  ${textWrapperStyles};
`;

export default TextGridItem;
