import React from 'react';
import { node } from 'prop-types';
import Grid from '@bbc/psammead-grid';

const LeadingStoryPromo = ({ image, info }) => (
  <Grid columns={{ group4: 8 }} enableGelGutters>
    <Grid item columns={{ group4: 2 }}>
      {info}
    </Grid>
    <Grid item columns={{ group4: 6 }}>
      {image}
    </Grid>
  </Grid>
);

LeadingStoryPromo.propTypes = {
  image: node.isRequired,
  info: node.isRequired,
};

export default LeadingStoryPromo;
