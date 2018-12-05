import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import HorizontalRule from './index';

describe('Headline', () => {
  shouldMatchSnapshot('should render correctly', <HorizontalRule />);
});
