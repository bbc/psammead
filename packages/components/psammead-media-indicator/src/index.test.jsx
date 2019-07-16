import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import MediaIndicator from './index';

describe('MediaIndicator', () => {
  shouldMatchSnapshot(
    'should render video by default',
    <MediaIndicator service="news" />,
  );

  shouldMatchSnapshot(
    'should render video indicator correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      type="video"
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render video correctly without duration details',
    <MediaIndicator type="video" service="news" />,
  );

  shouldMatchSnapshot(
    'should render audio indicator correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      type="audio"
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render audio correctly without duration details',
    <MediaIndicator type="audio" service="news" />,
  );
});

describe('MediaIndicator - Top Story', () => {
  shouldMatchSnapshot(
    'should render a top story audio promo render correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      type="audio"
      topStory
      service="news"
    />,
  );
});
