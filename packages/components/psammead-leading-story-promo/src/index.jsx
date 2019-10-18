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
  position: relative;

  @supports (${grid}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: ${GEL_SPACING_DBL};
    grid-column-end: span 6;
  }
`;

const ImageGridColumns = css`
  grid-template-columns: repeat(4, 1fr);
  grid-column-end: span 4;
`;

const ImageGridColumnsFallback = css`
  width: ${fourOfSixColumnsMaxWidthScaleable};
  display: inline-block;
`;

const ImageGridItem = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;

  ${ImageGridColumnsFallback}

  @supports (${grid}) {
    display: block;
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
    display: block;
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
