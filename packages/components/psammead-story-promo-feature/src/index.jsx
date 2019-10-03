import React from 'react';
import styled from 'styled-components';
import Grid from '@bbc/psammead-grid';

// Do I need these? ////////////////////////////////////
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import { grid } from '@bbc/psammead-styles/detection';

const InlineMediaIndicator = styled.div`
  ${({ topStory }) =>
    topStory
      ? `
      position: absolute;
      bottom: 0;
      `
      : `
      @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
        position: absolute;
        bottom: 0;
      }
      `}
`;

const ImageGridItem = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
`;
///////////////////////////////////////////////////////

/*
* Featured story promo
*/
const FeaturedStoryPromo = ({image, info, mediaIndicator, topStory}) => (
  <Grid enableGelGutters enableGelMargins columns={{ group4: 8 }}>
    <Grid item columns={{ group4: 6 }}>
      <Grid item columns={{ group4: 2 }}>
        <p>This is a headline</p>
      </Grid>
      <Grid item columns={{ group4: 4 }} startOffset={{ group4: 3 }}>
        <ImageGridItem topStory={topStory}>
          {image}
          {mediaIndicator && (
            <InlineMediaIndicator topStory={topStory}>
              {mediaIndicator}
            </InlineMediaIndicator>
          )}
        </ImageGridItem>
      </Grid>
    </Grid>
    <Grid item columns={{ group4: 2}}>
      <ImageGridItem topStory={topStory}>
        {image}
        {mediaIndicator && (
          <InlineMediaIndicator topStory={topStory}>
            {mediaIndicator}
          </InlineMediaIndicator>
        )}
      </ImageGridItem>
    </Grid>
  </Grid>
);

export default FeaturedStoryPromo;
