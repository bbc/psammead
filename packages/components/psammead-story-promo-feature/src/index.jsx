import React from 'react';
import styled from 'styled-components';
import Grid from '@bbc/psammead-grid';

// Do I need these? ////////////////////////////////////
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';

const InlineMediaIndicator = styled.div`
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    position: absolute;
    bottom: 0;
  }
`;

///////////////////////////////////////////////////////

/*
* I need to show both the main story
* I also need to show the secondary smaller story -- can be a normal storyPromo whose size is restricted by the grid ???
* Component should be an alpha component
*/

// Image component - to contain the image -- image content should come from Simorgh
const ImageComponent = ({ image, mediaIndicator }) => (
  <>
    {image}
    {mediaIndicator && (
      <InlineMediaIndicator>
        {mediaIndicator}
      </InlineMediaIndicator>
    )}
  </>
);

/*
* Leading story promo (the big one)
*/
const LeadingStoryPromo = ({ image, info, mediaIndicator }) => (
  <Grid columns={{ group4: 8 }} enableGelGutters>
    <Grid columns={{ group4: 6 }} enableGelGutters>
      <Grid item columns={{ group4: 2 }}>
        {info}
      </Grid>
      <Grid item columns={{ group4: 4 }}>
        <ImageComponent image={image} mediaIndicator={mediaIndicator} />
      </Grid>
    </Grid>
    {/* <Grid columns={{ group4: 2 }} enableGelGutters>
      <p>This is the secondary story promo</p>
    </Grid> */}
  </Grid>
);

/*
* Secondary Story promo (the smaller story)
*/
// const SecondaryStoryPromo = ({ image, info, mediaIndicator }) => (
//   <StoryPromo
//     image={image}
//     info={info}
//     mediaIndicator={mediaIndicator}
//   />
// )

/*
* Featured story promo
*/
// const FeaturedStoryPromo = () => (
//   <Grid enableGelGutters enableGelMargins columns={{ group4: 8 }}>
//     <Grid item columns={{ group4: 6 }}>
//       <LeadingStoryPromo />
//     </Grid>
//     <Grid item columns={{ group4: 2}}>
//       <SecondaryStoryPromo />
//     </Grid>
//   </Grid>
// );

export default LeadingStoryPromo;
