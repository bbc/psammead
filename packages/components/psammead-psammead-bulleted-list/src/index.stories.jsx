import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import PsammeadBulletedList from './index';

storiesOf('PsammeadBulletedList', module).add(
  'default',
  () => <PsammeadBulletedList />,
  { notes },
);
