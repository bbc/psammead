import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import notes from '../README.md';
import Timestamp from '.';

storiesOf('Timestamp', module)
  .add(
    'default',
    () => <Timestamp datetime="1530947227000">7 July 2018</Timestamp>,
    { notes },
  )
  .add(
    'with "updated" prefix',
    () => <Timestamp datetime="1530947227000">Updated 7 July 2018</Timestamp>,
    { notes },
  );
