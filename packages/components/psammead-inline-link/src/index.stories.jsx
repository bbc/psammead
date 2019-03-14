import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import InlineLink from './index';

storiesOf('InlineLink', module).add(
  'default',
  () => <InlineLink href="https://www.bbc.com/news">BBC News</InlineLink>,
  { notes },
);
