import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from '../README.md';
import VisuallyHiddenText from './index';

storiesOf('VisuallyHiddenText', module)
  .addDecorator(withReadme(Readme))
  .add('default', () => (
    <VisuallyHiddenText>Some offscreen text</VisuallyHiddenText>
  ));
