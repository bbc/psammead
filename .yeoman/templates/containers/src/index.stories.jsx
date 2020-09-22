import React from 'react';
import { storiesOf } from '@storybook/react';

import <%= packageName %> from './index';

storiesOf('Containers/<%= packageName %>', module)
  .add(
    'default',
    () => (<<%= packageName %> />),
  );