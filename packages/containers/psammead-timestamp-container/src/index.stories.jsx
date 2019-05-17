import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { latin } from '@bbc/gel-foundations/scripts';
import Timestamp from '.';

storiesOf('TimestampContainer', module)
  .add('default', () => (
    <Timestamp
      timestamp={1530947227000}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY"
      isRelative={false}
      script={latin}
    />
  ))
  .add('with prefix', () => (
    <Timestamp
      timestamp={1552666749637}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative
      prefix="Updated"
      script={latin}
    />
  ))
  .add('with prefix and suffix', () => (
    <Timestamp
      timestamp={1530947227000}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={false}
      prefix="This"
      suffix="is date of last update"
      script={latin}
    />
  ));
