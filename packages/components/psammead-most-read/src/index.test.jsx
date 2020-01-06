import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import MostRead from '.';
import { getItemWrapperArray } from './testHelpers/itemsHelper';

describe('MostRead', () => {
  shouldMatchSnapshot(
    'should render with ltr most read with correct dir',
    <MostRead
      service="news"
      script={latin}
      dir="ltr"
      header="Most Read"
      numberOfItems={10}
    >
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'news',
        script: latin,
        dir: 'ltr',
      }).map(item => item)}
    </MostRead>,
  );
  shouldMatchSnapshot(
    'should render with rtl most read with correct dir',
    <MostRead
      service="persian"
      script={arabic}
      dir="rtl"
      header="الأكثر قراءة"
      numberOfItems={10}
    >
      {getItemWrapperArray({
        numberOfItems: 10,
        service: 'persian',
        script: arabic,
        dir: 'rtl',
      }).map(item => item)}
    </MostRead>,
  );
});
