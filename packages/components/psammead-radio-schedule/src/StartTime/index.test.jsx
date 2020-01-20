import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import StartTime from './index';

describe('StartTime', () => {
  shouldMatchSnapshot('should render correctly', <StartTime />);
});
