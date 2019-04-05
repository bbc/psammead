import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Copyright from './index';

storiesOf('Copyright', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(['copyright'], copyright => (
      <Copyright>{copyright}</Copyright>
    )),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with visually hidden text',
    inputProvider(
      ['visually hidden text', 'copyright'],
      (visuallyHiddenText, copyright) => (
        <Copyright>
          <VisuallyHiddenText>{visuallyHiddenText} </VisuallyHiddenText>
          {copyright}
        </Copyright>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
