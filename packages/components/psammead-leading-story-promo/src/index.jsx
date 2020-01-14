import React from 'react';
import styled, { css } from 'styled-components';
import { node, oneOf } from 'prop-types';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import { grid } from '@bbc/psammead-styles/detection';
import { GEL_SPACING_DBL, GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { getDoublePica } from '@bbc/gel-foundations/dist/typography';

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
  }
`;

const ImageGridColumns = css`
  grid-template-columns: repeat(4, 1fr);
  grid-column-end: span 4;
`;

const ImageGridColumnsFallback = css`
  width: ${fourOfSixColumnsMaxWidthScaleable};
  padding-${({ dir }) => (dir === 'ltr' ? 'left' : 'right')}: 0.5rem;
`;

const ImageGridItem = styled.div`
  display: inline-block;

  ${ImageGridColumnsFallback}

  @supports (${grid}) {
    width: initial;
    ${ImageGridColumns}
  }
`;

const TextGridColumns = css`
  grid-template-columns: repeat(2, 1fr);
  grid-column-end: span 2;
`;

const TextGridColumnsFallBack = css`
  width: ${twoOfSixColumnsMaxWidthScaleable};
  padding-${({ dir }) => (dir === 'ltr' ? 'right' : 'left')}: 0.5rem;
`;

const TextGridItem = styled.div`
  display: inline-block;
  vertical-align: top;

  ${TextGridColumnsFallBack}

  @supports (${grid}) {
    width: 100%;
    ${TextGridColumns}
  }
`;

export const LeadingPromoHeadline = styled.h3`
  ${({ script }) => script && getDoublePica(script)}
  ${({ service }) => getSerifMedium(service)}
  color: ${C_EBON};
  margin: 0; /* Reset */
  padding-bottom: ${GEL_SPACING};
`;

const LeadingStoryPromo = ({ image, info, dir }) => (
  <LeadingPromoWrapper dir={dir}>
    <TextGridItem dir={dir}>{info}</TextGridItem>
    <ImageGridItem dir={dir}>{image}</ImageGridItem>
  </LeadingPromoWrapper>
);

LeadingStoryPromo.propTypes = {
  image: node.isRequired,
  info: node.isRequired,
  dir: oneOf(['ltr', 'rtl']),
};

LeadingStoryPromo.defaultProps = {
  dir: 'ltr',
};

export default LeadingStoryPromo;
