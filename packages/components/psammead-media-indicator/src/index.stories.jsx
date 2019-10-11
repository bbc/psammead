import React from 'react';
import styled from 'styled-components';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import MediaIndicator from './index';

// To ensure the white box in the media indicator is visible.
const Page = styled.div`
  background: grey;
  height: 100vh;
`;

const PageDecorator = storyFn => <Page>{storyFn()}</Page>;

export default {
  title: 'Components|MediaIndicator/Video',
  decorators: [PageDecorator, withKnobs, dirDecorator],
};

export const videoWithoutDuration = ({ service }) => (
  <MediaIndicator
    service={service}
    indexAlsos={boolean('Index Also', false)}
  />
);

videoWithoutDuration.story = {
  name: 'video without duration',
  parameters: { notes },
};

export const videoWithDuration = ({ service }) => (
  <MediaIndicator
    duration={text('duration', '2:15')}
    datetime={text('datetime', 'PT2M15S')}
    type="video"
    service={service}
  />
);

videoWithDuration.story = {
  name: 'video with duration',
  parameters: { notes },
};

export const topStoryVideoWithDuration = ({ service }) => (
  <MediaIndicator
    duration={text('duration', '2:15')}
    datetime={text('datetime', 'PT2M15S')}
    type="video"
    topStory
    service={service}
  />
);

topStoryVideoWithDuration.story = {
  name: 'top story video with duration',
  parameters: { notes },
};

export default {
  title: 'Components|MediaIndicator/Audio',
  decorators: [PageDecorator, withKnobs, dirDecorator],
};

export const audioWithoutDuration = ({ service }) => (
  <MediaIndicator
    type="audio"
    service={service}
    indexAlsos={boolean('Index Also', false)}
  />
);

audioWithoutDuration.story = {
  name: 'audio without duration',
  parameters: { notes },
};

export const audioWithDuration = ({ service }) => (
  <MediaIndicator
    duration={text('duration', '2:15')}
    datetime={text('datetime', 'PT2M15S')}
    type="audio"
    service={service}
  />
);

audioWithDuration.story = {
  name: 'audio with duration',
  parameters: { notes },
};

export const topStoryAudioWithDuration = ({ service }) => (
  <MediaIndicator
    duration={text('duration', '2:15')}
    datetime={text('datetime', 'PT2M15S')}
    type="audio"
    topStory
    service={service}
  />
);

topStoryAudioWithDuration.story = {
  name: 'top story audio with duration',
  parameters: { notes },
};

export default {
  title: 'Components|MediaIndicator/Photo',
  decorators: [PageDecorator, withKnobs, dirDecorator],
};

export const photogallery = ({ service }) => (
  <MediaIndicator
    type="photogallery"
    service={service}
    indexAlsos={boolean('Index Also', false)}
  />
);

photogallery.story = {
  name: 'photogallery',
  parameters: { notes },
};

export const topStoryPhotogallery = ({ service }) => (
  <MediaIndicator type="photogallery" service={service} topStory />
);

topStoryPhotogallery.story = {
  name: 'top story photogallery',
  parameters: { notes },
};
