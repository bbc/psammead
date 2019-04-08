import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import Paragraph from './index';

describe('Paragraph', () => {
  shouldMatchSnapshot(
    'should render a correctly',
    <Paragraph script={latin}>This is text in a paragraph.</Paragraph>,
  );

  shouldMatchSnapshot(
    'should render correctly with arabic script typography values',
    <Paragraph script={arabic}>بعض محتوى النص</Paragraph>,
  );
});
