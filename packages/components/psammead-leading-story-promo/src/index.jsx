import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import { grid } from '@bbc/psammead-styles/detection';
import { GEL_GROUP_4_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';

/**
 * Add fallbacks
 */
const LeadingPromoWrapper = styled.div`
  position: relative;

  @supports (${grid}) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: ${GEL_SPACING_DBL};
    grid-column-end: span 8;

    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
      grid-column-gap: ${GEL_SPACING_DBL};
    }
  }
`;

// For Image positioning
// Maybe pull lines 43 -> into ImageGridColumns
// const ImageGridColumns = css`
//   grid-column: 1 / span 2;
// `;

const ImageGridItem = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;

  @supports (${grid}) {
    display: block;
    width: initial;

    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
      grid-template-columns: repeat(6, 1fr);
      grid-column-end: span 6;
    }
  }
`;

// For Info(text) positioning
// const TextGridColumns = css`
//   grid-column: 3 / span 4;
// `;

const TextGridItem = styled.div`
  display: inline-block;
  vertical-align: top;

  @supports (${grid}) {
    display: block;

    @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-end: span 2;
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
