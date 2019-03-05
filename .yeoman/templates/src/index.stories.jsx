import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from '../README.md';
import <%= componentName %> from './index';

storiesOf('<%= componentName %>', module)
  .addDecorator(withReadme(Readme))
  .add('default', () => <<%= componentName %> />);
