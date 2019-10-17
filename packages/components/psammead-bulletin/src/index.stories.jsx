import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { Link, LiveLabel } from '@bbc/psammead-story-promo';
import Image from '@bbc/psammead-image';
import notes from '../README.md';
import { Bulletin, BulletinHeading, BulletinCTA, BulletinSummary } from '.';

/* eslint-disable react/prop-types */
const BulletinComponent = ({ script, service, isLive, dir, type, ctaText }) => {
  const summaryText = 'This is the summary text';
  const headlineText = 'This is the headline';
  const imgSrc =
    'https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg';
  const bulletinLink = 'https://bbc.co.uk';
  const imgAltText = 'Iron man';

  return (
    <Bulletin>
      {type === 'video' && <Image src={imgSrc} alt={imgAltText} />}
      <BulletinHeading script={script} service={service}>
        <VisuallyHiddenText>{ctaText}, </VisuallyHiddenText>
        {isLive && (
          <LiveLabel service={service} dir={dir}>
            Live
          </LiveLabel>
        )}
        <Link href={bulletinLink}>{headlineText}</Link>
      </BulletinHeading>
      <BulletinSummary script={script} service={service}>
        {summaryText}
      </BulletinSummary>
      <BulletinCTA
        type={type}
        isLive={isLive}
        dir={dir}
        service={service}
        script={script}
      >
        {ctaText}
      </BulletinCTA>
    </Bulletin>
  );
};

storiesOf('Components|Bulletin', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Tv Bulletin',
    ({ script, service, dir }) => {
      const isLive = boolean('Live', false);
      return (
        <BulletinComponent
          isLive={isLive}
          script={script}
          service={service}
          dir={dir}
          type="video"
          ctaText="Watch"
        />
      );
    },
    { notes },
  )
  .add(
    'Radio Bulletin',
    ({ script, service, dir }) => {
      const isLive = boolean('Live', false);
      return (
        <BulletinComponent
          isLive={isLive}
          script={script}
          service={service}
          dir={dir}
          type="audio"
          ctaText="Listen"
        />
      );
    },
    { notes },
  );
