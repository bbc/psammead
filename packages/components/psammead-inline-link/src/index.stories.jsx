import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from '../README.md';
import InlineLink from './index';

storiesOf('InlineLink', module)
  .addDecorator(withReadme(Readme))
  .add('default', () => (
    <InlineLink href="https://www.bbc.com/news">BBC News</InlineLink>
  ));
