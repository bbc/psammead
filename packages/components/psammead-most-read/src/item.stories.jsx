import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import MostRead from './item';

const item = <p>John Lewis staff bonus cut again as profits fall</p>;
const count = <p>1</p>;

storiesOf('Components|MostRead/MostRead', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('Default', ({ script, service }) => (
    <MostRead item={item} count={count} service={service} script={script} />
  ));
