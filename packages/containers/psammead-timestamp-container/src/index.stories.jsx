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
import { jalaali } from '@bbc/psammead-calendars';
import Timestamp from '.';

import '@bbc/psammead-locales/moment/am';
import '@bbc/psammead-locales/moment/ha';
import '@bbc/psammead-locales/moment/ig';
import '@bbc/psammead-locales/moment/om';
import '@bbc/psammead-locales/moment/pcm';
import '@bbc/psammead-locales/moment/ps';
import '@bbc/psammead-locales/moment/rw';
import '@bbc/psammead-locales/moment/so';
import '@bbc/psammead-locales/moment/ti';

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
    update: () =>
      val(
        moment()
          .subtract(9, 'months')
          .add(2, 'second'),
      ),
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
  .add(
    'default',
    inputProvider({
      // eslint-disable-next-line react/prop-types
      componentFunction: ({ locale, script, service }) => {
        updateAllTimestamps();
        const storyTimestamp = select(
          'Timestamp',
          timestamps,
          timestamps['Fixed (27 Aug 2019)'],
        );
        const getAltCalendar = () => {
          if (locale === 'fa' || locale === 'ps') {
            return jalaali;
          }
          return null;
        };
        return (
          <Timestamp
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
    }),
  )
  .add(
    'with prefix',
    inputProvider({
      // eslint-disable-next-line react/prop-types
      componentFunction: ({ locale, script, service }) => {
        updateAllTimestamps();

        const storyTimestamp = select(
          'Timestamp',
          timestamps,
          timestamps['Fixed (27 Aug 2019)'],
        );
        return (
          <Timestamp
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
    }),
  )
  .add(
    'with prefix and suffix',
    inputProvider({
      // eslint-disable-next-line react/prop-types
      componentFunction: ({ locale, script, service }) => {
        updateAllTimestamps();

        const storyTimestamp = select(
          'Timestamp',
          timestamps,
          timestamps['Fixed (27 Aug 2019)'],
        );
        return (
          <Timestamp
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
    }),
  );
