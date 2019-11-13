import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import AvEmbedError from './index';

storiesOf('AvEmbedError', module).add('default', () => <AvEmbedError />, {
  notes,
});
