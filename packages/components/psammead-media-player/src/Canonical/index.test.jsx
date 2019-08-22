import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Canonical from '.';

describe('Media Player: Canonical', () => {
  shouldMatchSnapshot(
    'should render an iframe',
    <Canonical src="https://foo.bar/iframe" />,
  );
});
