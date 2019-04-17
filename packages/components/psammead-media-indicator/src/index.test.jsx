import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import MediaIndicator from './index';

describe('MediaIndicator', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      offscreenText="Video 2 minutes 15 seconds"
    />,
  );

  shouldMatchSnapshot(
    'should render correctly without duration details',
    <MediaIndicator offscreenText="Video" />,
  );
});
