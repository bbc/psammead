import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import PlayButton from './index';

describe('PlayButton', () => {
  shouldMatchSnapshot(
    'should render video by default',
    <PlayButton service="news" title="Dog chases cat." onClick={() => {}} />,
  );

  shouldMatchSnapshot(
    'should render video indicator correctly',
    <PlayButton
      duration="2:15"
      datetime="PT2M15S"
      type="video"
      service="news"
      title="Dog chases cat."
      onClick={() => {}}
    />,
  );

  shouldMatchSnapshot(
    'should render video correctly without duration details',
    <PlayButton
      type="video"
      service="news"
      title="Dog chases cat."
      onClick={() => {}}
    />,
  );

  shouldMatchSnapshot(
    'should render audio indicator correctly',
    <PlayButton
      duration="2:15"
      datetime="PT2M15S"
      type="audio"
      service="news"
      title="Dog chases cat."
      onClick={() => {}}
    />,
  );

  shouldMatchSnapshot(
    'should render audio correctly without duration details',
    <PlayButton
      type="audio"
      service="news"
      title="Dog chases cat."
      onClick={() => {}}
    />,
  );
});
