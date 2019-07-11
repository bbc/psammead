import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { latin } from '@bbc/gel-foundations/scripts';
import { date, withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Timestamp from '.';
import '@bbc/psammead-locales/moment/ig';
import '@bbc/psammead-locales/moment/pcm';

const defaultTimestamp = new Date(1530947227000);

const dateAsNumber = (name, defaultValue) => {
  const stringTimestamp = date(name, defaultValue);
  return Number(stringTimestamp);
};

const locales = ['en', 'fa', 'ig', 'pcm', 'yo'];

storiesOf('Containers|TimestampContainer', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Timestamp
      timestamp={dateAsNumber('timestamp', defaultTimestamp)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY"
      isRelative={boolean('isRelative', false)}
      script={latin}
      locale={select('locale', locales, locales[0])}
    />
  ))
  .add('with prefix', () => (
    <Timestamp
      timestamp={dateAsNumber('timestamp', defaultTimestamp)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={boolean('isRelative', true)}
      prefix={text('Prefix text', 'Updated')}
      script={latin}
      locale={select('locale', locales, locales[0])}
    />
  ))
  .add('with prefix and suffix', () => (
    <Timestamp
      timestamp={dateAsNumber('timestamp', defaultTimestamp)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={boolean('isRelative', false)}
      prefix={text('Prefix text', 'This')}
      suffix={text('Suffix text', 'is date of last update')}
      script={latin}
      locale={select('locale', locales, locales[0])}
    />
  ));
