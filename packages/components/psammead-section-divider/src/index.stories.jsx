import React from 'react';
import { storiesOf } from '@storybook/react';
import { latin, thai } from '@bbc/gel-foundations/scripts';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import notes from '../README.md';
import SectionDivider from './index';

storiesOf('SectionDivider', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <SectionDivider script={latin} inline={boolean('inline', true)}>
        {text('Title', 'Most Read')}
      </SectionDivider>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'igbo',
    () => (
      <SectionDivider script={latin} inline={boolean('inline', true)}>
        {text('Title', 'Ọ bụru')}
      </SectionDivider>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'thai',
    () => (
      <SectionDivider script={thai} inline={boolean('inline', true)}>
        {text('Title', 'ภาพวาดขอ')}
      </SectionDivider>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
