import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import MostRead from '.';

storiesOf('Components|MostRead', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('Example with layout change at group4+', () => <MostRead />);
