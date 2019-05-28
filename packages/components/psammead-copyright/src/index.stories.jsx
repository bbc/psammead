import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Copyright from './index';

storiesOf('Components|Copyright', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => <Copyright>{text('copyright', 'Getty Images')}</Copyright>,
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with visually hidden text',
    () => (
      <Copyright>
        <VisuallyHiddenText>
          {text('visually hidden text', 'Image source, ')}
        </VisuallyHiddenText>
        {text('copyright', 'Getty Images')}
      </Copyright>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
