import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Paragraph from './index';

describe('Paragraph', () => {
  shouldMatchSnapshot(
    'should render a correctly',
    <Paragraph>This is text in a paragraph.</Paragraph>,
  );
});
