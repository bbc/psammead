import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from '../README.md';
import { Headline, SubHeading } from './index';

storiesOf('Headline', module).add(
  'default',
  () => <Headline>This is my headline.</Headline>,
  { notes },
);

storiesOf('SubHeading', module).add(
  'default',
  () => (
    <SubHeading text="This is a SubHeading">This is a SubHeading</SubHeading>
  ),
  { notes },
);
