import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import { Headline, SubHeading } from './index';

storiesOf('Headline', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(['headline'], headline => <Headline>{headline}</Headline>),
    { notes, knobs: { escapeHTML: false } },
  );

storiesOf('SubHeading', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(['subheading'], subheader => (
      <SubHeading text={subheader}>{subheader}</SubHeading>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
