import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Brand from './index';

describe('Brand', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Brand brandName="Default Brand Name" />,
  );
});
