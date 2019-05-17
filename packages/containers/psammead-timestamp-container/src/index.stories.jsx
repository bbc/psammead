import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { latin } from '@bbc/gel-foundations/scripts';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Timestamp from '.';

storiesOf('TimestampContainer', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Timestamp
      timestamp={number('Unix timestamp', 1530947227000)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY"
      isRelative={false}
      script={latin}
    />
  ))
  .add('with prefix', () => (
    <Timestamp
      timestamp={number('Unix timestamp', 1552666749637)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative
      prefix={text('Prefix text', 'Updated')}
      script={latin}
    />
  ))
  .add('with prefix and suffix', () => (
    <Timestamp
      timestamp={number('Unix timestamp', 1530947227000)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={false}
      prefix={text('Prefix text', 'This')}
      suffix={text('Suffix text', 'is date of last update')}
      script={latin}
    />
  ));
