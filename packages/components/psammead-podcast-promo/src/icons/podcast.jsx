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
    bottom: 5px;
    right: 3px;
  }
`;

const Podcast = () => (
  <StyledPodcastIcon>{mediaIcons.podcast}</StyledPodcastIcon>
);

export default Podcast;
