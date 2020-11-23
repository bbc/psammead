import React from 'react';
import styled from '@emotion/styled';
import { mediaIcons } from '@bbc/psammead-assets/svgs';

const StyledSeriesStackIcon = styled.i`
  > svg {
    width: 16px;
    height: 16px;
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
