import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import MostRead from '.';

storiesOf('Components|MostRead/MostRead', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('Default', () => <MostRead />);
