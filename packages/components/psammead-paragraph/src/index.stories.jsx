import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from '../README.md';
import Paragraph from './index';

storiesOf('Paragraph', module)
  .addDecorator(withReadme(Readme))
  .add('default', () => <Paragraph>This is text in a paragraph.</Paragraph>);
