import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SectionDivider from './index';

storiesOf('SectionDivider', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'title', defaultText: 'Most Read' }],
      ([title], script, dir) => (
        <SectionDivider script={script} dir={dir}>
          {title}
        </SectionDivider>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
