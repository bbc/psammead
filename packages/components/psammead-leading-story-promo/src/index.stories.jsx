import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import StoryPromo, { Headline, Summary, Link } from '@bbc/psammead-story-promo';
import Grid from '@bbc/psammead-grid';
import notes from '../README.md';
import LeadingStoryPromo, { LeadingPromoHeadline } from './index';

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

/* eslint-disable react/prop-types */
const InfoComponent = ({
  headlineText,
  summaryText,
  script,
  service,
  isLeadingPromo,
}) => {
  const link = <Link href="https://www.bbc.co.uk/news">{headlineText}</Link>;
  return (
    <>
      {isLeadingPromo ? (
        <LeadingPromoHeadline script={script} service={service}>
          {link}
        </LeadingPromoHeadline>
      ) : (
        <Headline script={script} service={service}>
          {link}
        </Headline>
      )}
      <Summary script={script} service={service}>
        {summaryText}
      </Summary>
    </>
  );
};
/* eslint-enable react/prop-types */

/* eslint-disable-next-line no-shadow */
const generateInfo = (text, script, service, dir, isLeadingPromo) => (
  <InfoComponent
    headlineText={text}
    summaryText={text}
    script={script}
    service={service}
    dir={dir}
    isLeadingPromo={isLeadingPromo}
  />
);

/* eslint-disable-next-line no-shadow */
const generate2FeatureStory = (text, script, service, dir) => {
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
        <LeadingStoryPromo
          image={buildImg()}
          info={generateInfo(text, script, service, dir, true)}
        />
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
          <StoryPromo
            image={buildImg()}
            info={generateInfo(text, script, service, dir, false)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

storiesOf('Components|StoryPromo/LeadingStoryPromo', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    /* eslint-disable-next-line no-shadow */
    ({ text, script, service, dir }) => (
      <LeadingStoryPromo
        image={buildImg()}
        info={generateInfo(text, script, service, dir, true)}
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'leading promo + secondary story promo',
    /* eslint-disable-next-line no-shadow */
    ({ text, script, service, dir }) =>
      generate2FeatureStory(text, script, service, dir),
    { notes, knobs: { escapeHTML: false } },
  );
