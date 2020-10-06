import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Byline from './index';

storiesOf('Components/Byline', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ service }) => (
      <Byline
        service={service}
        avatar={{ src: 'https://i.pravatar.cc/128?img=69' }}
        name={text('name', 'John Smith')}
        title={text('title', 'Art editor')}
      />
    ),
    { notes },
  )
  .add(
    'without avatar',
    ({ service }) => (
      <Byline
        service={service}
        name={text('name', 'By John Smith')}
        title={text('title', 'Art editor')}
      />
    ),
    { notes },
  );
