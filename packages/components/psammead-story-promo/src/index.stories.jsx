import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import Timestamp from '@bbc/psammead-timestamp';
import notes from '../README.md';
import StoryPromo, { Headline, Summary } from './index';

const buildImageComponent = () => (
  <Image
    alt={text('Image alt text', 'An example of image alt text')}
    src={text(
      'Image src',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg',
    )}
    width="640"
  />
);

// eslint-disable-next-line react/prop-types
const InfoComponent = ({ headlineText, summaryText, script }) => (
  <Fragment>
    <Headline script={script}>{headlineText}</Headline>
    <Summary script={script}>{summaryText}</Summary>
    <Timestamp
      datetime={text('Timestamp datetime', '2019-03-01T14:00+00:00')}
      script={script}
    >
      {text('Timestamp', '12 March 2019')}
    </Timestamp>
  </Fragment>
);

storiesOf('StoryPromo', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'Headline' }, { name: 'Summary' }],
      ([headlineText, summaryText], script) => {
        const Info = (
          <InfoComponent
            headlineText={headlineText}
            summaryText={summaryText}
            script={script}
          />
        );

        return <StoryPromo image={buildImageComponent()} info={Info} />;
      },
    ),
    { notes, knobs: { escapeHTML: false } },
  );
