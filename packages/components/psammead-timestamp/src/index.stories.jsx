import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { text, withKnobs } from '@storybook/addon-knobs';
import notes from '../README.md';
import Timestamp from '.';

storiesOf('Timestamp', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <Timestamp datetime="1530947227000">
        {text('Timestamp Text', '7 July 2018')}
      </Timestamp>
    ),
    { notes },
  )
  .add(
    'with "updated" prefix',
    () => (
      <Timestamp datetime="1530947227000">
        {text('Timestamp Text', 'Updated 7 July 2018')}
      </Timestamp>
    ),
    { notes },
  );
