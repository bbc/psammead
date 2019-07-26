import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import Timestamp from '@bbc/psammead-timestamp';
import MediaIndicator from '@bbc/psammead-media-indicator';
import notes from '../README.md';
import StoryPromo, { Headline, Summary, Link } from './index';

/* eslint-disable react/prop-types */
const InfoComponent = ({
  headlineText,
  summaryText,
  script,
  topStory,
  service,
}) => (
  <Fragment>
    <Headline script={script} topStory={topStory} service={service}>
      <Link href="https://www.bbc.co.uk/news">{headlineText}</Link>
    </Headline>
    <Summary script={script} topStory={topStory} service={service}>
      {summaryText}
    </Summary>
    <Timestamp
      datetime={text('Timestamp datetime', '2019-03-01T14:00+00:00')}
      script={script}
      padding={false}
      service={service}
    >
      {text('Timestamp', '12 March 2019')}
    </Timestamp>
  </Fragment>
);

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

const generateStory = ({ topStory }) =>
  inputProvider(
    [{ name: 'Headline' }, { name: 'Summary' }],
    ({ slotTexts: [headlineText, summaryText], script, service }) => {
      const Info = (
        <InfoComponent
          headlineText={headlineText}
          summaryText={summaryText}
          script={script}
          topStory={topStory}
          service={service}
        />
      );

      const mediaType = select(
        'Media Type',
        ['No media', 'video', 'audio', 'photogallery'],
        'No media',
      );

      const Img = buildImg();

      return (
        <StoryPromo
          image={Img}
          info={Info}
          mediaIndicator={
            mediaType !== 'No media' &&
            MediaIndicatorComponent(mediaType, service)
          }
          topStory={topStory}
        />
      );
    },
  );

storiesOf('Components|StoryPromo/StoryPromo', module)
  .addDecorator(withKnobs)
  .add('default', generateStory({ topStory: false }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add('Top story', generateStory({ topStory: true }), {
    notes,
    knobs: { escapeHTML: false },
  });
