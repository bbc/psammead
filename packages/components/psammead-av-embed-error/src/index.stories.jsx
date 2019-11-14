import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import AvEmbedError from './index';

storiesOf('Components|AvEmbedError', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ service }) => (
      <AvEmbedError
        service={service}
        message={text(
          'message',
          "Sorry, we're unable to bring you this media right now.",
        )}
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  );
