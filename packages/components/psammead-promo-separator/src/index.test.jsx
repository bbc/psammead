import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import PromoSeparator from './index';

describe('PromoSeparator', () => {
  shouldMatchSnapshot('should render correctly', <PromoSeparator />);
});
