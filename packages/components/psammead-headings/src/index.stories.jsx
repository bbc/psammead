import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from '../README.md';
import { Headline, SubHeading } from './index';

storiesOf('Headline', module)
  .addDecorator(withReadme(Readme))
  .add('default', () => <Headline>This is my headline.</Headline>);

storiesOf('SubHeading', module)
  .addDecorator(withReadme(Readme))
  .add('default', () => (
    <SubHeading text="This is a SubHeading">This is a SubHeading</SubHeading>
  ));
