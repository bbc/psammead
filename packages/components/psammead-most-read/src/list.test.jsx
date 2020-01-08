import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, bengali, burmese, latin } from '@bbc/gel-foundations/scripts';
import MostReadList from './list';
import { getItemWrapperArray } from './testHelpers';

describe('MostReadList', () => {
  shouldMatchSnapshot(
    'should render with ltr news items with correct dir',
    <MostReadList numberOfItems={10} dir="ltr">
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'news',
        script: latin,
        dir: 'ltr',
      }).map(item => item)}
    </MostReadList>,
  );

  shouldMatchSnapshot(
    'should render with rtl arabic items with correct dir',
    <MostReadList numberOfItems={10} dir="rtl">
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'persian',
        script: arabic,
        dir: 'rtl',
      }).map(item => item)}
    </MostReadList>,
  );

  shouldMatchSnapshot(
    'should render with ltr bengali items with correct dir',
    <MostReadList numberOfItems={10} dir="ltr">
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'bengali',
        script: bengali,
        dir: 'ltr',
      }).map(item => item)}
    </MostReadList>,
  );

  shouldMatchSnapshot(
    'should render with ltr burmese items with correct dir',
    <MostReadList numberOfItems={10} dir="ltr">
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'burmese',
        script: burmese,
        dir: 'ltr',
      }).map(item => item)}
    </MostReadList>,
  );
});
