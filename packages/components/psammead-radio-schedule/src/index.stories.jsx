import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import RadioSchedule from './index';

storiesOf('Components|RadioSchedule', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    props => (
      <RadioSchedule
        {...props}
        heading={props.text}
        summary={props.text}
        date="29/01/1990"
        duration="30:00"
      />
    ),
    {
      notes,
    },
  );
