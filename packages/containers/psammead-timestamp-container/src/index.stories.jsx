import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import {
  boolean,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import moment from 'moment-timezone';
import Timestamp from '.';

import '@bbc/psammead-locales/moment/ig';
import '@bbc/psammead-locales/moment/pcm';
import '@bbc/psammead-locales/moment/yo';

// Fixed timestamp for 27 August 2019, 14:54 BST
const fixedTimestamp = 1566914061212;

const val = momentTimestamp => momentTimestamp.valueOf();

const timestamps = {
  'Fixed (27 Aug 2019)': fixedTimestamp,
  Now: Date.now(),
  '5 seconds ago': val(moment().subtract(5, 'seconds')),
  '30 seconds ago': val(moment().subtract(30, 'seconds')),
  '59 seconds ago': val(moment().subtract(59, 'seconds')),
  '1 minute ago': val(moment().subtract(1, 'minute')),
  '24 minutes ago': val(moment().subtract(24, 'minute')),
  '59 minutes ago': val(moment().subtract(59, 'minute')),
  '63 minutes ago': val(moment().subtract(63, 'minute')),
  '95 minutes ago': val(moment().subtract(95, 'minute')),
  '2 hours ago': val(moment().subtract(2, 'hours')),
  '23 hours ago': val(moment().subtract(23, 'hours')),
  '1 day ago': val(moment().subtract(1, 'day')),
  '30 hours ago': val(moment().subtract(30, 'hours')),
  '20 days ago': val(moment().subtract(20, 'day')),
  '21 days ago': val(moment().subtract(21, 'day')),
  '8.9999... months ago': val(
    moment()
      .subtract(9, 'months')
      .add(2, 'second'),
  ),
  '9 months ago': val(moment().subtract(9, 'months')),
  'Custom timestamp': 0,
};

storiesOf('Containers|TimestampContainer', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider([], ({ locale, script, service }) => {
      const storyTimestamp = select('Timestamp', timestamps, fixedTimestamp);
      return (
        <Timestamp
          timestamp={
            storyTimestamp === 0 // matches value for 'Custom timestamp'
              ? number('Timestamp value', Date.now()) // default for custom timestamp is now
              : storyTimestamp
          }
          dateTimeFormat="YYYY-MM-DD"
          format={text('Format', 'D MMMM YYYY, HH:mm z')}
          isRelative={boolean('isRelative', false)}
          script={script}
          locale={locale}
          service={service}
        />
      );
    }),
  )
  .add(
    'with prefix',
    inputProvider([], ({ locale, script, service }) => {
      const storyTimestamp = select('Timestamp', timestamps, fixedTimestamp);
      return (
        <Timestamp
          timestamp={
            storyTimestamp === 0 // matches value for 'Custom timestamp'
              ? number('Timestamp value', Date.now()) // default for custom timestamp is now
              : storyTimestamp
          }
          dateTimeFormat="YYYY-MM-DD"
          format={text('Format', 'D MMMM YYYY, HH:mm z')}
          isRelative={boolean('isRelative', false)}
          prefix={text('Prefix text', 'Updated')}
          script={script}
          locale={locale}
          service={service}
        />
      );
    }),
  )
  .add(
    'with prefix and suffix',
    inputProvider([], ({ locale, script, service }) => {
      const storyTimestamp = select('Timestamp', timestamps, fixedTimestamp);
      return (
        <Timestamp
          timestamp={
            storyTimestamp === 0 // matches value for 'Custom timestamp'
              ? number('Timestamp value', Date.now()) // default for custom timestamp is now
              : storyTimestamp
          }
          dateTimeFormat="YYYY-MM-DD"
          format={text('Format', 'D MMMM YYYY, HH:mm z')}
          isRelative={boolean('isRelative', false)}
          prefix={text('Prefix text', 'This')}
          suffix={text('Suffix text', 'is date of last update')}
          script={script}
          locale={locale}
          service={service}
        />
      );
    }),
  );
