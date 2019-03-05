import React from 'react';
import { storiesOf } from '@storybook/react';
import Readme from '../README.md';
import { Headline, SubHeading } from './index';

storiesOf('Headline', module).add(
  'default',
  () => <Headline>This is my headline.</Headline>,
  { notes: Readme },
);

storiesOf('SubHeading', module).add(
  'default',
  () => (
    <SubHeading text="This is a SubHeading">This is a SubHeading</SubHeading>
  ),
  { notes: Readme },
);
