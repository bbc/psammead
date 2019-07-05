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

storiesOf('Components|MediaIndicator', module)
  .addDecorator(PageDecorator)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'video without duration',
    ({ service }) => (
      <MediaIndicator
        offscreenText={text('offscreenText', 'Video')}
        service={service}
      />
    ),
    { notes },
  )
  .add(
    'video with duration',
    ({ service }) => (
      <MediaIndicator
        duration={text('duration', '2:15')}
        datetime={text('datetime', 'PT2M15S')}
        offscreenText={text('offscreenText', 'Video')}
        type="video"
        service={service}
      />
    ),
    { notes },
  )
  .add(
    'audio with duration',
    ({ service }) => (
      <MediaIndicator
        offscreenText={text('offscreenText', 'Audio')}
        duration={text('duration', '2:15')}
        datetime={text('datetime', 'PT2M15S')}
        type="audio"
        service={service}
      />
    ),
    { notes },
  )
  .add(
    'audio without duration',
    ({ service }) => (
      <MediaIndicator
        offscreenText={text('offscreenText', 'Audio')}
        type="audio"
        service={service}
      />
    ),
    { notes },
  );
