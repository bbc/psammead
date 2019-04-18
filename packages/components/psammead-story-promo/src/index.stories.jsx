import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Img from '@bbc/psammead-image';
import { latin } from '@bbc/gel-foundations/scripts';
import Timestamp from '@bbc/psammead-timestamp';
import notes from '../README.md';
import StoryPromo, { Heading, Paragraph } from './index';

const Image = (
  <Img
    alt={text('Image alt text', '2019-03-01T14:00+00:00')}
    src={text(
      'Image src',
      'https://ichef.bbci.co.uk/news/660/cpsprodpb/909B/production/_106491073_gettyimages-909260196.jpg',
    )}
    width="100%"
  />
);

const Text = (
  <Fragment>
    <Heading script={latin}>
      {text(
        'Headline',
        'This little piggy went to market, This little piggy stayed at home',
      )}
    </Heading>
    <Paragraph>
      {text(
        'Paragraph',
        'Yesterday 1 little piggy, George Ham, went to the market and was never the same.',
      )}
    </Paragraph>
    <Timestamp datetime={text('Timestamp datetime', '2019-03-01T14:00+00:00')}>
      {text('Timestamp', '12 March 2019')}
    </Timestamp>
  </Fragment>
);

storiesOf('StoryPromo', module)
  .addDecorator(withKnobs)
  .add('default', () => <StoryPromo image={Image} text={Text} />, { notes });
