import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import notes from '../README.md';
import Bulletin from '.';

/* eslint-disable react/prop-types */
const BulletinComponent = ({
  script,
  service,
  mediaType,
  hasImage,
  dir,
  text,
}) => {
  const ctaLink = 'https://bbc.co.uk';

  const isLive = boolean('Live', false);
  const ctaText = mediaType === 'audio' ? 'Listen' : 'Watch';
  const playCtaText = isLive ? `${ctaText} Live` : ctaText;
  const offScreenText = isLive ? `${ctaText} LIVE` : ctaText;

  const image = (
    <Image
      src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
      alt="Iron man"
    />
  );

  return (
    <Bulletin
      image={hasImage && image}
      mediaType={mediaType}
      isLive={isLive}
      script={script}
      service={service}
      headlineText={text}
      summaryText={text}
      ctaLink={ctaLink}
      ctaText={playCtaText}
      dir={dir}
      offScreenText={offScreenText}
    />
  );
};

storiesOf('Components|Bulletin', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Tv Bulletin',
    ({ text: textSnipet, script, service, dir }) => (
      <BulletinComponent
        script={script}
        service={service}
        mediaType="video"
        hasImage
        dir={dir}
        text={textSnipet}
      />
    ),
    { notes },
  )
  .add(
    'Radio Bulletin',
    ({ text: textSnipet, script, service, dir }) => {
      const hasImage = boolean('With Image', true);

      return (
        <BulletinComponent
          script={script}
          service={service}
          mediaType="audio"
          hasImage={hasImage}
          dir={dir}
          text={textSnipet}
        />
      );
    },
    { notes },
  );
