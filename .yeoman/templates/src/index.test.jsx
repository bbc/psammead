import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import <%= componentName %> from './index';

describe('<%= componentName %>', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <<%= componentName %> />,
  );
});
