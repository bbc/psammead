import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import AmpGeo, { AmpAd } from '.';

describe('AmpGeo', () => {
  shouldMatchSnapshot(
    'it should render amp-geo with inlined JSON data',
    <AmpGeo />,
  );
});

describe('AmpAd', () => {
  shouldMatchSnapshot('it should render amp-ad', <AmpAd />);
});
