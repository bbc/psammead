/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';

storiesOf('Components|Sticky Player', module).add(
  'default',
  () => <div>Hello World</div>,
  { notes, knobs: { escapeHTML: false } },
);
