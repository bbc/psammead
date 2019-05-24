import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import MediaIndicator from './index';

// To ensure the white box in the media indicator is visible.
const Page = styled.div`
  background: black;
  height: 100vh;
`;

const PageDecorator = storyFn => <Page>{storyFn()}</Page>;

storiesOf('MediaIndicator', module)
  .addDecorator(PageDecorator)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'video without duration',
    () => (
      <MediaIndicator
        offscreenText={text('offscreenText', 'Video 2 minutes 15 seconds')}
      />
    ),
    { notes },
  )
  .add(
    'video with duration',
    () => (
      <MediaIndicator
        duration={text('duration', '2:15')}
        datetime={text('datetime', 'PT2M15S')}
        offscreenText={text('offscreenText', 'Video 2 minutes 15 seconds')}
        type="video"
      />
    ),
    { notes },
  )
  .add(
    'audio with duration',
    () => (
      <MediaIndicator
        offscreenText={text('offscreenText', 'Audio')}
        duration={text('duration', '2:15')}
        datetime={text('datetime', 'PT2M15S')}
        type="audio"
      />
    ),
    { notes },
  )
  .add(
    'audio without duration',
    () => (
      <MediaIndicator
        offscreenText={text('offscreenText', 'Audio')}
        type="audio"
      />
    ),
    { notes },
  );
