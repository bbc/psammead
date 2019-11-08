import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import OnwardJourneys from './index';

storiesOf('Components|OnwardJourneys', module).add(
  'default',
  () => <OnwardJourneys />,
  { notes },
);
