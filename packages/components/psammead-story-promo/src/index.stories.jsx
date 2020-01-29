import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Image from '@bbc/psammead-image';
import MediaIndicator from '@bbc/psammead-media-indicator';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Grid from '@bbc/psammead-grid';
import Timestamp from '@bbc/psammead-timestamp-container';
import StoryPromo, { Headline, Summary, Link, LiveLabel } from './index';
import relatedItems from '../testHelpers/relatedItems';
import IndexAlsosContainer from '../testHelpers/IndexAlsosContainer';
import notes from '../README.md';

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

const MediaIndicatorComponent = (type, service, displayImage) => {
  return (
    <MediaIndicator
      duration={displayImage && type !== 'photogallery' && '2:15'}
      datetime="PT2M15S"
      service={service}
      type={type}
    />
  );
};

/* eslint-disable-next-line react/prop-types */
const LiveComponent = ({ headline, service, dir }) => (
  /* eslint-disable-next-line jsx-a11y/aria-role */
  <span role="text">
    <LiveLabel service={service} dir={dir}>
      LIVE
    </LiveLabel>
    <VisuallyHiddenText lang="en-GB">Live, </VisuallyHiddenText>
    {headline}
  </span>
);

/* eslint-disable-next-line react/prop-types */
const HiddenText = ({ type, headline }) => (
  /* eslint-disable-next-line jsx-a11y/aria-role */
  <span role="text">
    <VisuallyHiddenText>{type}, </VisuallyHiddenText>
    <span>{headline}</span>
    <VisuallyHiddenText>, 2,15</VisuallyHiddenText>
  </span>
);

// eslint-disable-next-line react/prop-types
const StoryTimestamp = ({ script, service }) => (
  <Timestamp
    timestamp={122222222}
    dateTimeFormat="YYYY-MM-DD"
    format="LL"
    script={script}
    padding={false}
    service={service}
    isRelative={false}
  />
);

/* eslint-disable react/prop-types */
const InfoComponent = ({
  headlineText,
  summaryText,
  script,
  promoType,
  service,
  isLive,
  dir,
  type,
  alsoItems,
  promoHasImage,
  timestamp,
}) => (
  <>
    <Headline
      script={script}
      promoType={promoType}
      service={service}
      promoHasImage={promoHasImage}
    >
      <Link href="https://www.bbc.co.uk/news">
        {isLive ? (
          <LiveComponent service={service} dir={dir} headline={headlineText} />
        ) : (
          <HiddenText headline={headlineText} type={type} />
        )}
      </Link>
    </Headline>
    <Summary
      script={script}
      promoType={promoType}
      service={service}
      promoHasImage={promoHasImage}
    >
      {summaryText}
    </Summary>
    {timestamp && <StoryTimestamp />}
    {promoType === 'top' && alsoItems && (
      <IndexAlsosContainer
        alsoItems={alsoItems}
        script={script}
        service={service}
        dir={dir}
      />
    )}
  </>
);

const generateStory = ({
  promoType,
  alsoItems = null,
  displayImage = true,
}) => ({ text: textSnippet, script, service, dir }) => {
  const mediaType = select(
    'Media Type',
    ['No media', 'video', 'audio', 'photogallery'],
    'No media',
  );
  const timestamp = boolean('Display timestamp');

  const Info = (
    <InfoComponent
      headlineText={textSnippet}
      summaryText={textSnippet}
      script={script}
      promoType={promoType}
      service={service}
      isLive={boolean('isLive', false)}
      dir={dir}
      type={mediaType}
      alsoItems={alsoItems}
      promoHasImage={displayImage}
      timestamp={timestamp}
    />
  );

  const Img = buildImg();

  return (
    <StoryPromo
      image={Img}
      info={Info}
      displayImage={displayImage}
      mediaIndicator={
        mediaType !== 'No media' &&
        MediaIndicatorComponent(mediaType, service, displayImage)
      }
      promoType={promoType}
      timestamp={timestamp}
    />
  );
};

/* eslint-disable-next-line no-shadow */
const generate2FeatureStory = () => args => (
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
      {generateStory({ promoType: 'leading' })(args)}
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
          group0: 8,
          group1: 8,
          group2: 8,
          group3: 8,
          group4: 2,
          group5: 2,
        }}
      >
        {generateStory({ promoType: 'regular' })(args)}
      </Grid>
    </Grid>
  </Grid>
);

storiesOf('Components|StoryPromo/StoryPromo', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('Regular promo', generateStory({ promoType: 'regular' }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add(
    'Regular promo - No image',
    generateStory({ promoType: 'regular', displayImage: false }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  )
  .add('Top story promo', generateStory({ promoType: 'top' }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add(
    'Top story promo - Index Alsos - multiple',
    generateStory({ promoType: 'top', alsoItems: relatedItems }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  )
  .add(
    'Top story promo - Index Alsos - one',
    generateStory({ promoType: 'top', alsoItems: [relatedItems[0]] }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  )
  .add('Leading promo', generateStory({ promoType: 'leading' }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add('Leading promo and regular promo', generate2FeatureStory(), {
    notes,
    knobs: { escapeHTML: false },
  });
