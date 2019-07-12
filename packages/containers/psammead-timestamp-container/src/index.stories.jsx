import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { latin } from '@bbc/gel-foundations/scripts';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import Timestamp from '.';

storiesOf('Containers|TimestampContainer', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Timestamp
      timestamp={number('Unix timestamp', 1530947227000)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY"
      isRelative={boolean('isRelative', false)}
      script={latin}
      service="news"
    />
  ))
  .add('with prefix', () => (
    <Timestamp
      timestamp={number('Unix timestamp', 1552666749637)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={boolean('isRelative', true)}
      prefix={text('Prefix text', 'Updated')}
      script={latin}
      service="news"
    />
  ))
  .add('with prefix and suffix', () => (
    <Timestamp
      timestamp={number('Unix timestamp', 1530947227000)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={boolean('isRelative', false)}
      prefix={text('Prefix text', 'This')}
      suffix={text('Suffix text', 'is date of last update')}
      script={latin}
      service="news"
    />
  ))
  .add('with locale', () => (
    <Timestamp
      timestamp={number('Unix timestamp', 1530947227000)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={boolean('isRelative', false)}
      script={latin}
      locale={text('Locale', 'fa')}
      service="persian"
    />
  ));
