import React from 'react';
import { storiesOf } from '@storybook/react';
import { latin } from '@bbc/gel-foundations/scripts';
import notes from '../README.md';
import MediaIndicator from './index';

storiesOf('MediaIndicator', module).add(
  'default',
  () => (
    <MediaIndicator
      duration="2:15"
      datetime="PT2M15S"
      offscreenText="Video 2 minutes 15 seconds"
      script={latin}
    />
  ),
  { notes },
);
