import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import ProgramCard, { programStates } from './ProgramCard/index';
import notes from '../README.md';

const stories = storiesOf('Components|RadioSchedule/ProgramCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob());

Object.keys(programStates).forEach(state => {
  stories.add(
    `${state}`,
    props => (
      <ProgramCard
        {...props}
        brandTitle={props.text}
        summary={props.longText}
        episodeTitle="29/01/1990"
        duration="30:00"
        state={state}
        ctaLink="#"
      />
    ),
    { notes },
  );
});
