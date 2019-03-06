import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import Readme from '../README.md';
import Copyright from './index';

storiesOf('Copyright', module)
  .addDecorator(withReadme(Readme))
  .add('default', () => <Copyright>Getty Images</Copyright>)
  .add('with visually hidden text', () => (
    <Copyright>
      <VisuallyHiddenText>Image source, </VisuallyHiddenText>
      Getty Images
    </Copyright>
  ));
