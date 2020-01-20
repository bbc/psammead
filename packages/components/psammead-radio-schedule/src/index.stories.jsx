import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import RadioSchedule from './index';
import { StartTime } from './StartTime';

storiesOf('Components|RadioSchedule', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('default', () => <RadioSchedule />, { notes })
  .add('Start Time', () => <StartTime />, { notes });
