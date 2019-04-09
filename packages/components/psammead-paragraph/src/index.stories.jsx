import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Paragraph from './index';

storiesOf('Paragraph', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(['paragraph'], paragraph => (
      <Paragraph>{paragraph}</Paragraph>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
