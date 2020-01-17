import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import ProgramCard from './index';

const states = ['live', 'onDemand', 'next'];

const stories = storiesOf('Components|ProgramCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob());

states.forEach(state => {
  stories.add(
    `${state}`,
    props => (
      <ProgramCard
        {...props}
        heading={props.text}
        summary={props.text}
        date="29/01/1990"
        duration="30:00"
        state={state}
        ctaLink="#"
      />
    ),
    { notes },
  );
});
