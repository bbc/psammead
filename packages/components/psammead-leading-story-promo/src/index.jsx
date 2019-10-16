import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import Grid from '@bbc/psammead-grid';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';

const InlineMediaIndicator = styled.div`
  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    position: absolute;
    bottom: 0;
  }
`;

const ImageComponent = ({ image, mediaIndicator }) => (
  <>
    {image}
    {mediaIndicator && (
      <InlineMediaIndicator>{mediaIndicator}</InlineMediaIndicator>
    )}
  </>
);

ImageComponent.propTypes = {
  image: node.isRequired,
  mediaIndicator: node,
};

ImageComponent.defaultProps = {
  mediaIndicator: null,
};

const LeadingStoryPromo = ({ image, info, mediaIndicator }) => (
  <Grid columns={{ group4: 8 }} enableGelGutters>
    <Grid item columns={{ group4: 2 }}>
      {info}
    </Grid>
    <Grid item columns={{ group4: 6 }}>
      <ImageComponent image={image} mediaIndicator={mediaIndicator} />
    </Grid>
  </Grid>
);

LeadingStoryPromo.propTypes = {
  image: node.isRequired,
  info: node.isRequired,
  mediaIndicator: node,
};

LeadingStoryPromo.defaultProps = {
  mediaIndicator: null,
};

export default LeadingStoryPromo;
