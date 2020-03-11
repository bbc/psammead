import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Include from './index';

describe('Include', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Include html="<div>hello</div>" />,
  );
});
