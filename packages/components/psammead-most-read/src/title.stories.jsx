import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import MostReadTitle from './title';

storiesOf('Components|MostRead/MostRead', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('Default', ({ script, service }) => (
    <MostReadTitle script={script} service={service} header="Most Read" />
  ));
