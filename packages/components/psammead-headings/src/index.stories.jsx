import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import { latin } from '@bbc/gel-foundations/scripts';
import notes from '../README.md';
import { Headline, SubHeading } from './index';

storiesOf('Headline', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'Headline', defaultText: 'headline' }],
      ([headline]) => <Headline script={latin}>{headline}</Headline>,
    ),
    { notes, knobs: { escapeHTML: false } },
  );

storiesOf('SubHeading', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'SubHeading', defaultText: 'subHeading' }],
      ([subheader]) => (
        <SubHeading text={subheader} script={latin}>
          {subheader}
        </SubHeading>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
