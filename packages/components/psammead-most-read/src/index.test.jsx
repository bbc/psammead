import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { arabic, latin } from '@bbc/gel-foundations/scripts';
import { renderMostRead } from './testHelpers';

describe('MostRead', () => {
  shouldMatchSnapshot(
    'should render with ltr most read with correct dir',
    renderMostRead({
      service: 'news',
      script: latin,
      dir: 'ltr',
      header: 'Most Read',
      numberOfItems: 10,
    }),
  );
  shouldMatchSnapshot(
    'should render with rtl most read with correct dir',
    renderMostRead({
      service: 'persian',
      script: arabic,
      dir: 'rtl',
      header: 'الأكثر قراءة',
      numberOfItems: 10,
    }),
  );
});
