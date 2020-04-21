import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import {
  boolean,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import moment from 'moment';
import { jalaali } from '@bbc/psammead-calendars';
import notes from '../README.md';

// New locales
import '@bbc/psammead-locales/moment/am';
import '@bbc/psammead-locales/moment/ha';
import '@bbc/psammead-locales/moment/ig';
import '@bbc/psammead-locales/moment/om';
import '@bbc/psammead-locales/moment/pcm';
import '@bbc/psammead-locales/moment/ps';
import '@bbc/psammead-locales/moment/rw';
import '@bbc/psammead-locales/moment/so';
import '@bbc/psammead-locales/moment/ti';

// Updated locales
import '@bbc/psammead-locales/moment/ar';
import '@bbc/psammead-locales/moment/az';
import '@bbc/psammead-locales/moment/bn';
import '@bbc/psammead-locales/moment/es';
import '@bbc/psammead-locales/moment/gu';
import '@bbc/psammead-locales/moment/hi';
import '@bbc/psammead-locales/moment/ky';
import '@bbc/psammead-locales/moment/mr';
import '@bbc/psammead-locales/moment/ne';
import '@bbc/psammead-locales/moment/pa-in';
import '@bbc/psammead-locales/moment/pt-br';
import '@bbc/psammead-locales/moment/ru';
import '@bbc/psammead-locales/moment/si';
import '@bbc/psammead-locales/moment/sr';
import '@bbc/psammead-locales/moment/sr-cyrl';
import '@bbc/psammead-locales/moment/sw';
import '@bbc/psammead-locales/moment/ta';
import '@bbc/psammead-locales/moment/th';
import '@bbc/psammead-locales/moment/uk';
import '@bbc/psammead-locales/moment/ur';
import '@bbc/psammead-locales/moment/uz';
import '@bbc/psammead-locales/moment/yo';

import TimestampContainer from '.';

// Fixed timestamp for 27 August 2019, 14:54 BST
const fixedTimestamp = 1566914061212;

const val = momentTimestamp => momentTimestamp.valueOf();

const timestamps = {
  'Fixed (27 Aug 2019)': { timestamp: undefined, update: () => fixedTimestamp },
  Now: { timestamp: undefined, update: () => Date.now() },
  '5 seconds ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(5, 'seconds')),
  },
  '30 seconds ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(30, 'seconds')),
  },
  '59 seconds ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(59, 'seconds')),
  },
  '1 minute ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(1, 'minute')),
  },
  '24 minutes ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(24, 'minute')),
  },
  '59 minutes ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(59, 'minute')),
  },
  '63 minutes ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(63, 'minute')),
  },
  '95 minutes ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(95, 'minute')),
  },
  '2 hours ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(2, 'hours')),
  },
  '23 hours ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(23, 'hours')),
  },
  '1 day ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(1, 'day')),
  },
  '30 hours ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(30, 'hours')),
  },
  '20 days ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(21, 'day')),
  },
  '21 days ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(21, 'day')),
  },
  '8.9999... months ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(9, 'months').add(2, 'second')),
  },
  '9 months ago': {
    timestamp: undefined,
    update: () => val(moment().subtract(9, 'months')),
  },
  'Custom timestamp': { timestamp: 0, update: () => 0 },
};

// update timestamp in place (so that Storybook has fixed value references)
const updateAllTimestamps = () => {
  Object.keys(timestamps).forEach(key => {
    timestamps[key].timestamp = timestamps[key].update();
  });
};

const getTimestampValue = storyTimestamp => {
  return storyTimestamp.timestamp === 0 // matches value for 'Custom timestamp'
    ? number('Timestamp value', Date.now()) // default for custom timestamp is now
    : storyTimestamp.timestamp;
};

storiesOf('Containers|TimestampContainer', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ locale, script, service }) => {
      updateAllTimestamps();
      const storyTimestamp = select(
        'Timestamp',
        timestamps,
        timestamps['Fixed (27 Aug 2019)'],
      );
      const getAltCalendar = () =>
        ({
          fa: jalaali,
          ps: jalaali,
        }[locale]);
      return (
        <TimestampContainer
          timestamp={getTimestampValue(storyTimestamp)}
          dateTimeFormat="YYYY-MM-DD"
          format={text('Format', 'D MMMM YYYY, HH:mm z')}
          isRelative={boolean('isRelative', false)}
          script={script}
          locale={locale}
          service={service}
          altCalendar={getAltCalendar()}
        />
      );
    },
    { notes },
  )
  .add(
    'with prefix',
    ({ locale, script, service }) => {
      updateAllTimestamps();

      const storyTimestamp = select(
        'Timestamp',
        timestamps,
        timestamps['Fixed (27 Aug 2019)'],
      );
      return (
        <TimestampContainer
          timestamp={getTimestampValue(storyTimestamp)}
          dateTimeFormat="YYYY-MM-DD"
          format={text('Format', 'D MMMM YYYY, HH:mm z')}
          isRelative={boolean('isRelative', false)}
          prefix={text('Prefix text', 'Updated')}
          script={script}
          locale={locale}
          service={service}
        />
      );
    },
    { notes },
  )
  .add(
    'with prefix and suffix',
    ({ locale, script, service }) => {
      updateAllTimestamps();

      const storyTimestamp = select(
        'Timestamp',
        timestamps,
        timestamps['Fixed (27 Aug 2019)'],
      );
      return (
        <TimestampContainer
          timestamp={getTimestampValue(storyTimestamp)}
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
    },
    { notes },
  );
