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
    inputProvider(
      [{ name: 'Headline', defaultText: 'headline' }],
      ([headline], script) => <Headline script={script}>{headline}</Headline>,
    ),
    { notes, knobs: { escapeHTML: false } },
  );

storiesOf('SubHeading', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'SubHeading', defaultText: 'subHeading' }],
      ([subheader], script) => (
        <SubHeading text={subheader} script={script}>
          {subheader}
        </SubHeading>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
