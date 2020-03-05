import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Idt1Include from './index';

storiesOf('Components|Idt1Include', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('default', () => <Idt1Include />, { notes });