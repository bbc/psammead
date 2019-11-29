import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, bengali, burmese, latin } from '@bbc/gel-foundations/scripts';
import MostReadList from '.';
import { items, itemsRTL } from '../testHelpers/fixtureData';

describe('MostReadList', () => {
  shouldMatchSnapshot(
    'should render with ltr news items with correct dir',
    <MostReadList items={items} service="news" script={latin} dir="ltr" />,
  );
  shouldMatchSnapshot(
    'should render with rtl arabic items with correct dir',
    <MostReadList
      items={itemsRTL}
      service="arabic"
      script={arabic}
      dir="rtl"
    />,
  );
  shouldMatchSnapshot(
    'should render with ltr bengali items with correct dir',
    <MostReadList items={items} service="bengali" script={bengali} dir="ltr" />,
  );
  shouldMatchSnapshot(
    'should render with ltr burmese items with correct dir',
    <MostReadList items={items} service="burmese" script={burmese} dir="ltr" />,
  );
});
