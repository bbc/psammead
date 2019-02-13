import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from '../README.md';
import Brand from './index';

storiesOf('Brand', module)
  .addDecorator(withReadme(Readme))
  .add('default', () => <Brand brandName="Default Brand Name" />);
