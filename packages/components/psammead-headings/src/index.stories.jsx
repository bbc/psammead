import React from 'react';
import { storiesOf } from '@storybook/react';
import { latin } from '@bbc/gel-foundations/scripts';
import notes from '../README.md';
import { Headline, SubHeading } from './index';

storiesOf('Headline', module).add(
  'default',
  () => <Headline script={latin}>This is my headline.</Headline>,
  { notes },
);

storiesOf('SubHeading', module).add(
  'default',
  () => (
    <SubHeading text="This is a SubHeading" script={latin}>
      This is a SubHeading
    </SubHeading>
  ),
  { notes },
);
