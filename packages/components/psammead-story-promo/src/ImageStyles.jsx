import styled, { css } from 'styled-components';
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MAX,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MAX,
} from '@bbc/gel-foundations/breakpoints';
import { grid } from '@bbc/psammead-styles/detection';

const twoOfSixColumnsMaxWidthScaleable = `33.33%`;
// (2 / 6) * 100 = 0.3333333333 = 33.33%

const fourOfSixColumnsMaxWidthScaleable = `66.67%`;
// (4 / 6) * 100 = 66.6666666667 = 66.67%

const fullWidthColumnsMaxScaleable = `100%`;
// (12 / 12) * 100 = 100 = 100%

const halfWidthColumnsMaxScaleable = `50%`;

const gridFallbackImageWidthHalf = css`
  width: calc(${halfWidthColumnsMaxScaleable} - ${GEL_SPACING});
`;
const gridFallbackImageWidthTwoThirds = css`
  width: calc(${fourOfSixColumnsMaxWidthScaleable} - ${GEL_SPACING});
`;

const ImageGridColumnsTopStory = css`
  grid-column: 1 / span 6;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_4_SCREEN_WIDTH_MAX}) {
    grid-column: 1 / span 3;
  }
`;

const ImageGridColumns = css`
  grid-column: 1 / span 2;
`;

const ImageGridColumnsLeadingStory = css`
  grid-template-columns: repeat(6, 1fr);
  grid-column-end: span 6;

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-end: span 3;
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-end: span 4;
  }
`;

const ImageGridFallbackTopStory = css`
  margin-bottom: ${GEL_SPACING};
  width: ${fullWidthColumnsMaxScaleable};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) and (max-width: ${GEL_GROUP_3_SCREEN_WIDTH_MAX}) {
    ${gridFallbackImageWidthHalf};
    margin-bottom: 0;
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    ${gridFallbackImageWidthHalf};
  }
`;

const ImageGridFallback = css`
  width: ${twoOfSixColumnsMaxWidthScaleable};

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    display: block;
    width: 100%;
  }
`;

const ImageGridFallbackLeadingStory = css`
  width: ${fullWidthColumnsMaxScaleable};

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    width: ${gridFallbackImageWidthHalf};
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    width: ${gridFallbackImageWidthTwoThirds};
  }
`;

const imageGridStyles = {
  top: ImageGridColumnsTopStory,
  regular: ImageGridColumns,
  leading: ImageGridColumnsLeadingStory,
};

const imageGridFallbackStyles = {
  top: ImageGridFallbackTopStory,
  regular: ImageGridFallback,
  leading: ImageGridFallbackLeadingStory,
};

const ImageGridItem = styled.div`
    display: inline-block;
    vertical-align: top;
    position: relative;
    ${({ promoType }) => imageGridFallbackStyles[promoType]}

    @supports (${grid}) {
        width: initial;
        ${({ promoType }) => imageGridStyles[promoType]}
    }
`;

export default ImageGridItem;
