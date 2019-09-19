import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import MomentCalendars from './index';

storiesOf('MomentCalendars', module).add('default', () => <MomentCalendars />, {
  notes,
});
