import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import { SectionLabel, SectionLabelWithoutBar } from './index';

storiesOf('SectionLabel', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'title', defaultText: 'Most Read' }],
      ([title], script, dir) => (
        <SectionLabel script={script} dir={dir}>
          {title}
        </SectionLabel>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'without bar',
    inputProvider(
      [{ name: 'title', defaultText: 'Most Read' }],
      ([title], script, dir) => (
        <SectionLabelWithoutBar script={script} dir={dir}>
          {title}
        </SectionLabelWithoutBar>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
