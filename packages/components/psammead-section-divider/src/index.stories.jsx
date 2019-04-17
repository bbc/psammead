import React from 'react';
import { storiesOf } from '@storybook/react';
import { latin, thai } from '@bbc/gel-foundations/scripts';
import { withKnobs, text } from '@storybook/addon-knobs';
import notes from '../README.md';
import SectionDivider from './index';

storiesOf('SectionDivider', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <SectionDivider script={latin}>
        {text('Title', 'Most Read')}
      </SectionDivider>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'igbo',
    () => (
      <SectionDivider script={latin}>{text('Title', 'Ọ bụru')}</SectionDivider>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'thai',
    () => (
      <SectionDivider script={thai}>{text('Title', 'ภาพวาดขอ')}</SectionDivider>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
