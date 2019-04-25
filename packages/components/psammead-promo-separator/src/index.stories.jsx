import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import PromoSeparator from './index';

storiesOf('PromoSeparator', module).add('default', () => <PromoSeparator />, {
  notes,
});
