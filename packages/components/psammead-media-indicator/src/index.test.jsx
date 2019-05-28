import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import MediaIndicator from './index';

describe('MediaIndicator', () => {
  shouldMatchSnapshot(
    'should render video by default',
    <MediaIndicator offscreenText="Video 2 minutes 15 seconds" />,
  );

  shouldMatchSnapshot(
    'should render video indicator correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      offscreenText="Video 2 minutes 15 seconds"
      type="video"
    />,
  );

  shouldMatchSnapshot(
    'should render video correctly without duration details',
    <MediaIndicator offscreenText="Video" type="video" />,
  );

  shouldMatchSnapshot(
    'should render audio indicator correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      offscreenText="Audio 2 minutes 15 seconds"
      type="audio"
    />,
  );

  shouldMatchSnapshot(
    'should render audio correctly without duration details',
    <MediaIndicator offscreenText="Audio" type="audio" />,
  );
});
