import React from 'react';
import { storiesOf } from '@storybook/react';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Copyright from './index';

storiesOf('Copyright', module)
  .add('default', () => <Copyright>Getty Images</Copyright>, { notes })
  .add(
    'with visually hidden text',
    () => (
      <Copyright>
        <VisuallyHiddenText>Image source, </VisuallyHiddenText>
        Getty Images
      </Copyright>
    ),
    { notes },
  );
