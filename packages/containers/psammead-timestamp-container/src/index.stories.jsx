import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import Timestamp from '.';

storiesOf('Containers|TimestampContainer', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add('default', ({ service, script }) => (
    <Timestamp
      timestamp={number('Unix timestamp', 1530947227000)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY"
      isRelative={boolean('isRelative', false)}
      script={script}
      service={service}
    />
  ))
  .add('with prefix', ({ service, script }) => (
    <Timestamp
      timestamp={number('Unix timestamp', 1552666749637)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={boolean('isRelative', true)}
      prefix={text('Prefix text', 'Updated')}
      script={script}
      service={service}
    />
  ))
  .add('with prefix and suffix', ({ service, script }) => (
    <Timestamp
      timestamp={number('Unix timestamp', 1530947227000)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={boolean('isRelative', false)}
      prefix={text('Prefix text', 'This')}
      suffix={text('Suffix text', 'is date of last update')}
      script={script}
      service={service}
    />
  ))
  .add('with locale', ({ service, script, locale }) => (
    <Timestamp
      timestamp={number('Unix timestamp', 1530947227000)}
      dateTimeFormat="YYYY-MM-DD"
      format="D MMMM YYYY, HH:mm z"
      isRelative={boolean('isRelative', false)}
      script={script}
      locale={locale}
      service={service}
    />
  ));
