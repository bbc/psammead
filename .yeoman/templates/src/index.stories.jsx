import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import <%= componentName %> from './index';

storiesOf('<%= componentName %>', module)
  .add(
    'default',
    () => (<<%= componentName %> />),
    { notes },
  );