import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import <%= packageName %> from './index';

storiesOf('Containers/<%= packageName %>', module)
  .add(
    'default',
    () => (<<%= packageName %> />),
    { notes },
  );