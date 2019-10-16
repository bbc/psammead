import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Image from '@bbc/psammead-image';
import MediaIndicator from '@bbc/psammead-media-indicator';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import StoryPromo, { Headline, Summary, Link, LiveLabel } from './index';
import relatedItems from '../testHelpers/relatedItems';
import IndexAlsosContainer from '../testHelpers/IndexAlsosContainer';
import notes from '../README.md';
import withServicesKnob from '../../../utilities/psammead-storybook-helpers/src/withServicesKnob';

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

const MediaIndicatorComponent = (type, service) => {
  return (
    <MediaIndicator
      duration={type !== 'photogallery' && '2:15'}
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

/* eslint-disable react/prop-types */
const InfoComponent = ({
  headlineText,
  summaryText,
  script,
  topStory,
  service,
  isLive,
  dir,
  type,
  alsoItems,
}) => (
  <>
    <Headline script={script} topStory={topStory} service={service}>
      <Link href="https://www.bbc.co.uk/news">
        {isLive ? (
          <LiveComponent service={service} dir={dir} headline={headlineText} />
        ) : (
          <HiddenText headline={headlineText} type={type} />
        )}
      </Link>
    </Headline>
    <Summary script={script} topStory={topStory} service={service}>
      {summaryText}
    </Summary>
    {topStory && alsoItems && (
      <IndexAlsosContainer
        alsoItems={alsoItems}
        script={script}
        service={service}
        dir={dir}
      />
    )}
  </>
);

const generateStory = ({ topStory, alsoItems = null }) => ({
  text: textSnippet,
  script,
  service,
  dir,
}) => {
  const mediaType = select(
    'Media Type',
    ['No media', 'video', 'audio', 'photogallery'],
    'No media',
  );

  const Info = (
    <InfoComponent
      headlineText={service === 'news' ? 'Headline' : textSnippet}
      summaryText={service === 'news' ? 'Summary' : textSnippet}
      script={script}
      topStory={topStory}
      service={service}
      isLive={boolean('isLive', false)}
      dir={dir}
      type={mediaType}
      alsoItems={alsoItems}
    />
  );

  const Img = buildImg();

  return (
    <StoryPromo
      image={Img}
      info={Info}
      mediaIndicator={
        mediaType !== 'No media' && MediaIndicatorComponent(mediaType, service)
      }
      topStory={topStory}
    />
  );
};

storiesOf('Components|StoryPromo/StoryPromo', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('default', generateStory({ topStory: false }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add('Top story', generateStory({ topStory: true }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add(
    'Index Alsos - multiple',
    generateStory({ topStory: true, alsoItems: relatedItems }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  )
  .add(
    'Index Alsos - one',
    generateStory({ topStory: true, alsoItems: [relatedItems[0]] }),
    {
      notes,
      knobs: { escapeHTML: false },
    },
  );
