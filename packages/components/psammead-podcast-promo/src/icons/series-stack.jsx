import React from 'react';
import styled from '@emotion/styled';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';

const StyledSeriesStackIcon = styled.span`
  > svg {
    width: ${GEL_SPACING_DBL};
    height: ${GEL_SPACING_DBL};
    fill: currentColor;
    position: relative;
    bottom: 2px;
    right: 3px;
  }
`;

const SeriesStack = () => (
  <StyledSeriesStackIcon>{mediaIcons.seriesstack}</StyledSeriesStackIcon>
);

export default SeriesStack;
