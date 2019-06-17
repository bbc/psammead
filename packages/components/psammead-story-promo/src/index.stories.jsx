import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import Timestamp from '@bbc/psammead-timestamp';
import MediaIndicator from '@bbc/psammead-media-indicator';
import notes from '../README.md';
import StoryPromo, { Headline, Summary, Link } from './index';

// eslint-disable-next-line react/prop-types
const InfoComponent = ({ headlineText, summaryText, script, topStory }) => (
  <Fragment>
    <Headline script={script} topStory={topStory}>
      <Link href="https://www.bbc.co.uk/news">{headlineText}</Link>
    </Headline>
    <Summary script={script} topStory={topStory}>
      {summaryText}
    </Summary>
    <Timestamp
      datetime={text('Timestamp datetime', '2019-03-01T14:00+00:00')}
      script={script}
      padding={false}
    >
      {text('Timestamp', '12 March 2019')}
    </Timestamp>
  </Fragment>
);

const Img = (
  <Image
    alt={text('Image alt text', 'Robert Downey Junior in Iron Man')}
    src={text(
      'Image src',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg',
    )}
    width="640"
  />
);

const MediaIndicatorComponent = (
  <MediaIndicator
    duration="2:15"
    datetime="PT2M15S"
    offscreenText="Video 2 minutes 15 seconds"
  />
);

const generateStory = ({ mediaIndicator, topStory }) =>
  inputProvider(
    [{ name: 'Headline' }, { name: 'Summary' }],
    ([headlineText, summaryText], script) => {
      const Info = (
        <InfoComponent
          headlineText={headlineText}
          summaryText={summaryText}
          script={script}
          topStory={topStory}
        />
      );

      return (
        <StoryPromo
          image={Img}
          info={Info}
          mediaIndicator={mediaIndicator && MediaIndicatorComponent}
          topStory={topStory}
        />
      );
    },
  );

storiesOf('Components|StoryPromo/StoryPromo', module)
  .addDecorator(withKnobs)
  .add('default', generateStory({}), { notes, knobs: { escapeHTML: false } })
  .add('with media indicator', generateStory({ mediaIndicator: true }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add('Top story', generateStory({ topStory: true }), {
    notes,
    knobs: { escapeHTML: false },
  })
  .add(
    'Top Story with media indicator',
    generateStory({ mediaIndicator: true, topStory: true }),
    { notes, knobs: { escapeHTML: false } },
  );
