import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import PlayButton from './index';

export default {
  title: 'Components|PlayButton/Video',
  decorators: [withKnobs, dirDecorator],
};

export const videoWithoutDuration = ({ service }) => (
  <PlayButton
    service={service}
    title="Dog chases cat."
    onClick={() => {}}
  />
);

videoWithoutDuration.story = {
  name: 'video without duration',
  parameters: { notes },
};

export const videoWithDuration = ({ service }) => (
  <PlayButton
    service={service}
    title="Dog chases cat."
    onClick={() => {}}
    duration={text('duration', '2:30')}
    durationSpoken={text('durationSpoken', '2 minutes 30 seconds')}
    datetime={text('datetime', 'PT2M30S')}
  />
);

videoWithDuration.story = {
  name: 'video with duration',
  parameters: { notes },
};

export default {
  title: 'Components|PlayButton/Audio',
  decorators: [withKnobs, dirDecorator],
};

export const audioWithoutDuration = ({ service }) => (
  <PlayButton
    service={service}
    title="Dog barks at cat."
    onClick={() => {}}
    type="audio"
  />
);

audioWithoutDuration.story = {
  name: 'audio without duration',
  parameters: { notes },
};

export const audioWithDuration = ({ service }) => (
  <PlayButton
    service={service}
    title="Dog barks at cat."
    onClick={() => {}}
    duration={text('duration', '2:30')}
    durationSpoken={text('durationSpoken', '2 minutes 30 seconds')}
    datetime={text('datetime', 'PT2M30S')}
    type="audio"
  />
);

audioWithDuration.story = {
  name: 'audio with duration',
  parameters: { notes },
};
