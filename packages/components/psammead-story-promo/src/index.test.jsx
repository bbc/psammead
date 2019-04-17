import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import StoryPromo from './index';

describe('StoryPromo', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <StoryPromo
      duration="2:15"
      datetime="PT2M15S"
      offscreenText="Video 2 minutes 15 seconds"
    />,
  );

  shouldMatchSnapshot(
    'should render correctly without duration details',
    <StoryPromo offscreenText="Video" />,
  );
});
