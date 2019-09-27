import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import PlayButton from './index';

storiesOf('Components|PlayButton/Video', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'video without duration',
    ({ service }) => (
      <PlayButton service={service} type="video" onClick={() => {}} />
    ),
    { notes },
  )
  .add(
    'video with duration',
    ({ service }) => (
      <PlayButton
        service={service}
        duration={text('duration', '2:30')}
        datetime={text('datetime', 'PT2M15S')}
        type="video"
        onClick={() => {}}
      />
    ),
    { notes },
  );

storiesOf('Components|PlayButton/Audio', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'audio without duration',
    ({ service }) => (
      <PlayButton service={service} type="audio" onClick={() => {}} />
    ),
    { notes },
  )
  .add(
    'audio with duration',
    ({ service }) => (
      <PlayButton
        service={service}
        duration={text('duration', '2:30')}
        datetime={text('datetime', 'PT2M15S')}
        type="audio"
        onClick={() => {}}
      />
    ),
    { notes },
  );
