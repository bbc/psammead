import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import <%= componentName %> from './index';

storiesOf('<%= componentName %>', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('default', () => <<%= componentName %> />, { notes });