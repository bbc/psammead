import React from 'react';
import styled from '@emotion/styled';
import { mediaIcons } from '@bbc/psammead-assets/svgs';
import { GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { C_METAL } from '@bbc/psammead-styles/colours';

const StyledSeriesStackIcon = styled.span`
  color: ${C_METAL};

  > svg {
    fill: currentColor;
    color: unset;
    width: ${GEL_SPACING_DBL};
    height: ${GEL_SPACING_DBL};
    position: relative;
    bottom: 2px;
    right: 3px;
  }
`;

const SeriesStack = () => (
  <StyledSeriesStackIcon>{mediaIcons.seriesstack}</StyledSeriesStackIcon>
);

export default SeriesStack;
