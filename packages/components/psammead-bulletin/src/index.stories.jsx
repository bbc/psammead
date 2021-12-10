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
  const withSummary = boolean('With summary', true);
  const ctaText = mediaType === 'audio' ? 'Listen' : 'Watch';
  const offScreenText = isLive ? `${ctaText} Live` : ctaText;

  const image = (
    <Image
      src="https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg"
      alt="Iron man"
    />
  );

  return (
    <Bulletin
      script={script}
      service={service}
      dir={dir}
      image={hasImage && image}
      mediaType={mediaType}
      headlineText={text}
      summaryText={withSummary ? text : null}
      ctaLink={ctaLink}
      ctaText={ctaText}
      isLive={isLive}
      offScreenText={offScreenText}
      ariaId={ctaLink}
    />
  );
};

storiesOf('Components/Bulletin', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Tv Bulletin',
    ({ text: textSnipet, script, service, dir }) => (
      <BulletinComponent
        script={script}
        service={service}
        dir={dir}
        mediaType="video"
        hasImage
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
          dir={dir}
          mediaType="audio"
          hasImage={hasImage}
          text={textSnipet}
        />
      );
    },
    { notes },
  );
