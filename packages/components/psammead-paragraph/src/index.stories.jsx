import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from '../README.md';
import Paragraph from './index';

storiesOf('Paragraph', module)
  .add('default', () => <Paragraph>This is text in a paragraph.</Paragraph>, { notes: Readme });
