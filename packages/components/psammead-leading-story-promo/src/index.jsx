import React from 'react';
import styled from 'styled-components';
import { node, shape } from 'prop-types';
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

const LeadingStoryPromo = ({ leadingPromo, secondaryPromo }) => (
  <Grid columns={{ group4: 8 }} enableGelGutters>
    <Grid columns={{ group4: 6 }} enableGelGutters>
      <Grid item columns={{ group4: 2 }}>
        {leadingPromo.info}
      </Grid>
      <Grid item columns={{ group4: 4 }}>
        <ImageComponent
          image={leadingPromo.image}
          mediaIndicator={leadingPromo.mediaIndicator}
        />
      </Grid>
    </Grid>
    <Grid columns={{ group4: 2 }} enableGelGutters>
      <Grid item columns={{ group4: 2 }}>
        <ImageComponent
          image={secondaryPromo.image}
          mediaIndicator={secondaryPromo.mediaIndicator}
        />
      </Grid>
      <Grid item columns={{ group4: 2 }}>
        {secondaryPromo.info}
      </Grid>
    </Grid>
  </Grid>
);

const leadingPromoProps = {
  image: node.isRequired,
  info: node.isRequired,
  mediaIndicator: node,
};

LeadingStoryPromo.propTypes = {
  leadingPromo: shape(leadingPromoProps).isRequired,
  secondaryPromo: shape(leadingPromoProps).isRequired,
};

export default LeadingStoryPromo;
