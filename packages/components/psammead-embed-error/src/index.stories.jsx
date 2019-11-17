import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import EmbedError from './index';

storiesOf('Components|EmbedError', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ service }) => (
      <EmbedError
        service={service}
        message={text(
          'message',
          "Sorry, we're unable to bring you this media right now.",
        )}
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'fill page',
    ({ service }) => (
      <EmbedError
        service={service}
        message={text(
          'message',
          "Sorry, we're unable to bring you this media right now.",
        )}
        fillViewport
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  );
