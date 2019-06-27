import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Paragraph from './index';

storiesOf('Components|Paragraph', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider([{ name: 'Paragraph' }], ([paragraph], script) => (
      <Paragraph script={script}>{paragraph}</Paragraph>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
