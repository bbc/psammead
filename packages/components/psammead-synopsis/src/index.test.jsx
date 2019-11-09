import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import Synopsis from './index';

describe('Synopsis', () => {
  shouldMatchSnapshot(
    'should render a correctly',
    <Synopsis script={latin} service="news">
      This is text in a paragraph.
    </Synopsis>,
  );

  shouldMatchSnapshot(
    'should render correctly with arabic script typography values',
    <Synopsis script={arabic} service="persian">
      بعض محتوى النص
    </Synopsis>,
  );
});
