import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { CanonicalSocialEmbed, AmpSocialEmbed } from './index';

describe('CanonicalSocialEmbed', () => {
  shouldMatchSnapshot('should render correctly', <CanonicalSocialEmbed />);
});

describe('AmpSocialEmbed', () => {
  shouldMatchSnapshot('should render correctly', <AmpSocialEmbed />);
});
