import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Timestamp from '@bbc/psammead-timestamp';
import MostReadItem from './item';

const items = [
  {
    item: {
      title: 'John Lewis staff bonus cut again as profits fall',
      href: 'https://www.bbc.com/vietnamese/institutional-49283563',
    },
    count: '6',
    dir: 'ltr',
  },
  {
    item: {
      title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
      href: 'https://www.bbc.com/vietnamese/institutional-49283563',
    },
    count: '۲',
    dir: 'rtl',
  },
];

const lastUpdated = (script, service) => (
  <Timestamp
    datetime="2019-03-01T14:00+00:00"
    script={script}
    padding={false}
    service={service}
  >
    Last updated: 5th November 2016
  </Timestamp>
);

const stories = storiesOf('Components|MostRead/MostReadItem', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob());

items.forEach(({ item, count, dir }) => {
  stories.add(`Default ${dir}`, ({ script, service }) => (
    <MostReadItem
      dir={dir}
      item={item}
      count={count}
      service={service}
      script={script}
    />
  ));
});

stories.add(`Item with last updated date`, ({ script, service }) => (
  <MostReadItem
    dir="ltr"
    item={{
      title: 'Stranded Indian ship put up for sale',
      href: 'https://www.bbc.com',
    }}
    count="10"
    service={service}
    script={script}
    lastUpdated={lastUpdated(script, service)}
  />
));
