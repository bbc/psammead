import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import IndexH1 from './index';

describe('Index Heading', () => {
  shouldMatchSnapshot(
    'should render correctly',
    <IndexH1 script={latin} service="news">
      This is a page heading
    </IndexH1>,
  );

  shouldMatchSnapshot(
    'should render correctly with arabic script typography values',
    <IndexH1 script={arabic} service="persian">
      هذا عنوان الصفحة
    </IndexH1>,
  );
});
