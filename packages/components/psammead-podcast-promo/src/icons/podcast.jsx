import React from 'react';
import styled from '@emotion/styled';
import { mediaIcons } from '@bbc/psammead-assets/svgs';

const StyledPodcastIcon = styled.span`
  > svg {
    margin-left: 0;
    width: 1.375rem;
    height: 1.375rem;
    fill: currentColor;
    position: relative;
    /* can this use flex to centre it instead */
    bottom: 0.3125rem;
    right: 0.1875rem;
  }
`;

const Podcast = () => (
  <StyledPodcastIcon>{mediaIcons.podcast}</StyledPodcastIcon>
);

export default Podcast;
