import styled, { css } from 'styled-components';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { grid } from '@bbc/psammead-styles/detection';

const twoOfSixColumnsMaxWidthScaleable = `33.33%`;
// (2 / 6) * 100 = 0.3333333333 = 33.33%

const fullWidthColumnsMaxScaleable = `100%`;
// (12 / 12) * 100 = 100 = 100%

const halfWidthColumnsMaxScaleable = `50%`;

const imageGridRadio = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    grid-column: 1 / span 2;
  }
`;

const imageGridTv = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-column: 1 / span 3;
  }
`;

const imageGridFallbackRadio = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    width: ${twoOfSixColumnsMaxWidthScaleable};
    padding: 0;
  }
`;

const imageGridFallbackTv = css`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: ${halfWidthColumnsMaxScaleable};
    padding: 0;
  }
`;

const imageGridStyles = {
  radio: imageGridRadio,
  tv: imageGridTv,
};

const imageGridFallbackStyles = {
  radio: imageGridFallbackRadio,
  tv: imageGridFallbackTv,
};

const ImageGridItem = styled.div`
  vertical-align: top;
  display: inline-block;  
  width: ${fullWidthColumnsMaxScaleable};
  padding: ${GEL_SPACING} ${GEL_SPACING} 0 ${GEL_SPACING};
  ${({ bulletinType }) => imageGridFallbackStyles[bulletinType]}

  @supports (${grid}) {
    width: initial;
    grid-column: 1 / span 6;
    ${({ bulletinType }) => imageGridStyles[bulletinType]}
  }
`;

export default ImageGridItem;
