import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import { Headline, Summary, Link } from '@bbc/psammead-story-promo';
import Grid from '@bbc/psammead-grid';
import notes from '../README.md';
import LeadingStoryPromo from './index';

const buildImg = () => (
  <Image
    alt={text('Image alt text', 'Robert Downey Junior in Iron Man')}
    src={text(
      'Image src',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg',
    )}
    width="640"
  />
);

/* eslint-disable-next-line react/prop-types */
const InfoComponent = ({ headlineText, summaryText, script, service }) => (
  <>
    <Headline script={script} service={service}>
      <Link href="https://www.bbc.co.uk/news">{headlineText}</Link>
    </Headline>
    <Summary script={script} service={service}>
      {summaryText}
    </Summary>
  </>
);

/* eslint-disable-next-line no-shadow */
const generateInfo = (text, script, service, dir) => (
  <InfoComponent
    headlineText={text}
    summaryText={text}
    script={script}
    service={service}
    dir={dir}
  />
);

/* eslint-disable-next-line no-shadow */
const generate2FeatureStory = (text, script, service, dir, Img) => {
  const Info = generateInfo(text, script, service, dir);
  return (
    <Grid
      columns={{
        group0: 8,
        group1: 8,
        group2: 8,
        group3: 8,
        group4: 8,
        group5: 8,
      }}
      enableGelGutters
    >
      <Grid
        item
        columns={{
          group0: 8,
          group1: 8,
          group2: 8,
          group3: 8,
          group4: 6,
          group5: 6,
        }}
      >
        <LeadingStoryPromo image={Img} info={Info} />
      </Grid>
      <Grid
        columns={{
          group0: 8,
          group1: 8,
          group2: 8,
          group3: 8,
          group4: 2,
          group5: 2,
        }}
        enableGelGutters
      >
        <Grid
          item
          columns={{
            group0: 2,
            group1: 2,
            group2: 2,
            group3: 2,
            group4: 2,
            group5: 2,
          }}
        >
          {Img}
        </Grid>
        <Grid
          item
          columns={{
            group0: 6,
            group1: 6,
            group2: 6,
            group3: 6,
            group4: 2,
            group5: 2,
          }}
        >
          {Info}
        </Grid>
      </Grid>
    </Grid>
  );
};

const Img = buildImg();

storiesOf('Components|StoryPromo/LeadingStoryPromo', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    /* eslint-disable-next-line no-shadow */
    ({ text, script, service, dir }) => (
      <LeadingStoryPromo
        image={Img}
        info={generateInfo(text, script, service, dir)}
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'leading promo + secondary story promo',
    /* eslint-disable-next-line no-shadow */
    ({ text, script, service, dir }) =>
      generate2FeatureStory(text, script, service, dir, Img),
    { notes, knobs: { escapeHTML: false } },
  );
