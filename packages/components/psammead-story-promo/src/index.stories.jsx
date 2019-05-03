import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import Image from '@bbc/psammead-image';
import { latin } from '@bbc/gel-foundations/scripts';
import Timestamp from '@bbc/psammead-timestamp';
import notes from '../README.md';
import StoryPromo, { Headline, Summary } from './index';

const ImageComponent = (
  <Image
    alt={text('Image alt text', '2019-03-01T14:00+00:00')}
    src={text(
      'Image src',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg',
    )}
    width="640"
  />
);

// eslint-disable-next-line react/prop-types
const InfoComponent = ({ headlineText, summaryText }) => (
  <Fragment>
    <Headline script={latin}>{headlineText}</Headline>
    <Summary script={latin}>{summaryText}</Summary>
    <Timestamp datetime={text('Timestamp datetime', '2019-03-01T14:00+00:00')}>
      {text('Timestamp', '12 March 2019')}
    </Timestamp>
  </Fragment>
);

storiesOf('StoryPromo', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [
        { name: 'Headline', defaultText: 'This is a headline' },
        { name: 'Summary', defaultText: 'This is a summary' },
      ],
      ([headlineText, summaryText]) => {
        const Info = (
          <InfoComponent
            headlineText={headlineText}
            summaryText={summaryText}
          />
        );

        return <StoryPromo image={ImageComponent} info={Info} />;
      },
    ),
    { notes, knobs: { escapeHTML: false } },
  );
