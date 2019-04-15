import React from 'react';
import { storiesOf } from '@storybook/react';
import { latin } from '@bbc/gel-foundations/scripts';
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
    { notes },
  );
