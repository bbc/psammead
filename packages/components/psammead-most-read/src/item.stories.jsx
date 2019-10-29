import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import MostRead from './item';

const items = [
  {
    item: {
      header: 'John Lewis staff bonus cut again as profits fall',
      href: 'https://www.bbc.com/vietnamese/institutional-49283563',
    },
    count: '10',
    dir: 'ltr',
  },
  {
    item: {
      header: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
      href: 'https://www.bbc.com/vietnamese/institutional-49283563',
    },
    count: '۲',
    dir: 'rtl',
  },
];

const stories = storiesOf('Components|MostRead/MostRead', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob());

items.forEach(({ item, count, dir }) => {
  stories.add(`Default ${dir}`, ({ script, service }) => (
    <MostRead
      dir={dir}
      item={item}
      count={count}
      service={service}
      script={script}
    />
  ));
});
