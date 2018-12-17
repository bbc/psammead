import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from '../README.md';
import Copyright from './index';

storiesOf('Copyright', module)
  .addDecorator(withReadme(Readme))
  .add('default', () => <Copyright>Getty Images</Copyright>);
