import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import MediaIndicator from './index';

describe('MediaIndicator', () => {
  shouldMatchSnapshot(
    'should render video by default',
    <MediaIndicator offscreenText="Video" service="news" />,
  );

  shouldMatchSnapshot(
    'should render video indicator correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      offscreenText="Video"
      type="video"
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render video correctly without duration details',
    <MediaIndicator offscreenText="Video" type="video" service="news" />,
  );

  shouldMatchSnapshot(
    'should render audio indicator correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      offscreenText="Audio"
      type="audio"
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render audio correctly without duration details',
    <MediaIndicator offscreenText="Audio" type="audio" service="news" />,
  );

  shouldMatchSnapshot(
    'should render photogallery correctly',
    <MediaIndicator type="photogallery" service="news" />,
  );
});

describe('MediaIndicator - Top Story', () => {
  shouldMatchSnapshot(
    'should render a top story audio promo render correctly',
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      offscreenText="Audio"
      type="audio"
      topStory
      service="news"
    />,
  );
});
