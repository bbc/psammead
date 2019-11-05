import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import MostReadTitle from './title';

storiesOf('Components|MostRead', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('Title', ({ script, service }) => (
    <MostReadTitle script={script} service={service} header="Most Read" />
  ));
