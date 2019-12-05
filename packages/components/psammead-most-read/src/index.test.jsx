import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import MostRead from '.';
import loadItems from './testHelpers/fixtureData';

describe('MostRead', () => {
  shouldMatchSnapshot(
    'should render with ltr most read with correct dir',
    <MostRead
      items={loadItems(10, 'LTR')}
      service="news"
      script={latin}
      dir="ltr"
      header="Most Read"
    />,
  );
  shouldMatchSnapshot(
    'should render with rtl most read with correct dir',
    <MostRead
      items={loadItems(10, 'RTL')}
      service="arabic"
      script={arabic}
      dir="rtl"
      header="الأكثر قراءة"
    />,
  );
});
