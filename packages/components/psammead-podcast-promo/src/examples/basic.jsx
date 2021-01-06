import React from 'react';
import { string } from 'prop-types';
import ImagePlaceholder from '@bbc/psammead-image-placeholder';
import serviceData from './fixtureData';

import PodcastPromo from '..';

const BasicExample = props => {
  let { service } = props;
  if (service !== 'russian' && service !== 'news') {
    service = 'news';
  }

  return (
    <PodcastPromo {...props} role="region" aria-labelledby="some-id">
      <PodcastPromo.Title id="some-id">
        {serviceData[service].podcastPromoTitle}
      </PodcastPromo.Title>
      <PodcastPromo.Card>
        <PodcastPromo.Card.ImageWrapper>
          <ImagePlaceholder ratio={100}>
            <img
              src={serviceData[service].image.src}
              alt={serviceData[service].image.alt}
              width="100%"
            />
          </ImagePlaceholder>
        </PodcastPromo.Card.ImageWrapper>
        <PodcastPromo.Card.Content>
          <PodcastPromo.Card.Title>
            <PodcastPromo.Card.Link href={serviceData[service].linkLabel.href}>
              <span className="podcast-promo--hover podcast-promo--focus podcast-promo--visited">
                {serviceData[service].brandTitle}
              </span>
            </PodcastPromo.Card.Link>
          </PodcastPromo.Card.Title>
          <PodcastPromo.Card.Description>
            {serviceData[service].brandDescription}
          </PodcastPromo.Card.Description>
          <PodcastPromo.Card.EpisodesText>
            {serviceData[service].linkLabel.text}
          </PodcastPromo.Card.EpisodesText>
        </PodcastPromo.Card.Content>
      </PodcastPromo.Card>
    </PodcastPromo>
  );
};

BasicExample.propTypes = {
  service: string.isRequired,
};

export default BasicExample;
