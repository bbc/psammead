import React from 'react';
import { storiesOf } from '@storybook/react';
import { latin } from '@bbc/gel-foundations/scripts';
import notes from '../README.md';
import Paragraph from './index';

storiesOf('Paragraph', module).add(
  'default',
  () => <Paragraph script={latin}>This is text in a paragraph.</Paragraph>,
  { notes },
);
