import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

import PlayButton from './index';

storiesOf('Components/PlayButton/Video', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('video without duration', ({ service }) => (
    <PlayButton service={service} title="Dog chases cat." onClick={() => {}} />
  ))
  .add('video with duration', ({ service }) => (
    <PlayButton
      service={service}
      title="Dog chases cat."
      onClick={() => {}}
      duration={text('duration', '2:30')}
      durationSpoken={text('durationSpoken', '2 minutes 30 seconds')}
      datetime={text('datetime', 'PT2M30S')}
    />
  ))
  .add('video with guidance', ({ service }) => (
    <PlayButton
      service={service}
      title="Dog chases cat."
      onClick={() => {}}
      duration={text('duration', '2:30')}
      durationSpoken={text('durationSpoken', '2 minutes 30 seconds')}
      datetime={text('datetime', 'PT2M30S')}
      guidanceMessage={text(
        'guidanceMessage',
        'Guidance: May contain strong language that may offend.',
      )}
    />
  ));

storiesOf('Components/PlayButton/Audio', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('audio without duration', ({ service }) => (
    <PlayButton
      service={service}
      title="Dog barks at cat."
      onClick={() => {}}
      type="audio"
    />
  ))
  .add('audio with duration', ({ service }) => (
    <PlayButton
      service={service}
      title="Dog barks at cat."
      onClick={() => {}}
      duration={text('duration', '2:30')}
      durationSpoken={text('durationSpoken', '2 minutes 30 seconds')}
      datetime={text('datetime', 'PT2M30S')}
      type="audio"
    />
  ));
