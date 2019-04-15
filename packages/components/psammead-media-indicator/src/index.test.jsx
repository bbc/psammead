import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import MediaIndicator from './index';

describe('MediaIndicator', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <MediaIndicator duration="2:15" />,
  );
});
