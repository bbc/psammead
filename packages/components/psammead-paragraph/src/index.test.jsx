import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import Paragraph from './index';

describe('Paragraph', () => {
  shouldMatchSnapshot(
    'should render a correctly',
    <Paragraph script={latin}>This is text in a paragraph.</Paragraph>,
  );
});
