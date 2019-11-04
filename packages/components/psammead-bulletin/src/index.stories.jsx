import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import notes from '../README.md';
import Bulletin from '.';

/* eslint-disable react/prop-types */
const BulletinComponent = ({ script, service, isLive, type, ctaText }) => {
  const summaryText = 'This is the summary text';
  const headlineText = 'This is the headline';
  const ctaLink = 'https://bbc.co.uk';

  const image = (
    <Image
      src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
      alt="Iron man"
    />
  );
  return (
    <Bulletin
      image={image}
      type={type}
      isLive={isLive}
      script={script}
      service={service}
      headlineText={headlineText}
      summaryText={summaryText}
      ctaLink={ctaLink}
      ctaText={ctaText}
    />
  );
};

storiesOf('Components|Bulletin', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Tv Bulletin',
    ({ script, service }) => {
      const isLive = boolean('Live', false);
      return (
        <BulletinComponent
          isLive={isLive}
          script={script}
          service={service}
          type="video"
          ctaText={isLive ? 'Watch Live' : 'Watch'}
        />
      );
    },
    { notes },
  )
  .add(
    'Radio Bulletin',
    ({ script, service }) => {
      const isLive = boolean('Live', false);
      return (
        <BulletinComponent
          isLive={isLive}
          script={script}
          service={service}
          type="audio"
          ctaText={isLive ? 'Listen Live' : 'Listen'}
        />
      );
    },
    { notes },
  );
