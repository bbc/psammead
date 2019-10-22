import React from 'react';
import styled, { css } from 'styled-components';
import { node } from 'prop-types';
import { grid } from '@bbc/psammead-styles/detection';
import { GEL_GROUP_4_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';

const fourOfSixColumnsMaxWidthScaleable = `66.67%`;
// (4 / 6) * 100 = 66.6666666667 = 66.67%

const twoOfSixColumnsMaxWidthScaleable = `33.33%`;
// (2 / 6) * 100 = 0.3333333333 = 33.33%

const LeadingPromoWrapper = styled.div`
  @supports (${grid}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: ${GEL_SPACING_DBL};
  }
`;

const ImageGridColumns = css`
  grid-template-columns: repeat(4, 1fr);
  grid-column-end: span 4;
`;

const ImageGridColumnsFallback = css`
  width: ${fourOfSixColumnsMaxWidthScaleable};
`;

const ImageGridItem = styled.div`
  display: inline-block;

  ${ImageGridColumnsFallback}

  @supports (${grid}) {
    width: initial;

    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
      ${ImageGridColumns}
    }
  }
`;

const TextGridColumns = css`
  grid-template-columns: repeat(2, 1fr);
  grid-column-end: span 2;
`;

const TextGridColumnsFallBack = css`
  width: ${twoOfSixColumnsMaxWidthScaleable};
`;

const TextGridItem = styled.div`
  display: inline-block;
  vertical-align: top;

  ${TextGridColumnsFallBack}

  @supports (${grid}) {
    width: 100%;

    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
      ${TextGridColumns}
    }
  }
`;

const LeadingStoryPromo = ({ image, info }) => (
  <LeadingPromoWrapper>
    <TextGridItem>{info}</TextGridItem>
    <ImageGridItem>{image}</ImageGridItem>
  </LeadingPromoWrapper>
);

LeadingStoryPromo.propTypes = {
  image: node.isRequired,
  info: node.isRequired,
};

export default LeadingStoryPromo;
