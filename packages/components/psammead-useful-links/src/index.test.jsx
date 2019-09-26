import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { UsefulLink } from './index';

const singleItem = ['Labaran BBC Hausa a text'];

describe('One item', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <UsefulLink usefulItems={singleItem} strapline={false} />,
  );
});
