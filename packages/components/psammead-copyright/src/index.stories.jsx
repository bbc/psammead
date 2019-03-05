import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from '../README.md';
import Copyright from './index';

storiesOf('Copyright', module).add(
  'default',
  () => <Copyright>Getty Images</Copyright>,
  { notes: Readme },
);
