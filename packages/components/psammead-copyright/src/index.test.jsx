import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Copyright from './index';

describe('Copyright', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <Copyright>Getty Images</Copyright>,
  );
});
