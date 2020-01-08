import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import { getItems } from './testHelpers';
import { MostRead } from './index';

describe('MostRead', () => {
  shouldMatchSnapshot(
    'should render with ltr most read with correct dir',
    <MostRead
      items={getItems('news', 10)}
      script={latin}
      service="news"
      header="Most Read"
      dir="ltr"
    />,
  );
  shouldMatchSnapshot(
    'should render with rtl most read with correct dir',
    <MostRead
      items={getItems('arabic', 10)}
      script={arabic}
      service="arabic"
      header="الأكثر قراءة"
      dir="rtl"
    />,
  );
});
