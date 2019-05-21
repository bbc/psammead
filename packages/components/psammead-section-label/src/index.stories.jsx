import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SectionLabel from './index';

storiesOf('SectionLabel', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'title', defaultText: 'Most Read' }],
      ([title], script, dir) => (
        <SectionLabel
          script={script}
          dir={dir}
          bar={boolean('show bar?', true)}
          labelId="example-section-label"
        >
          {title}
        </SectionLabel>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
