import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Timestamp from '@bbc/psammead-timestamp';
import { MostReadItem, StyledCountSpan } from './item';

const items = [
  {
    item: {
      title: 'John Lewis staff bonus cut again as profits fall',
      href: 'https://www.bbc.com/vietnamese/institutional-49283563',
    },
    dir: 'ltr',
  },
  {
    item: {
      title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
      href: 'https://www.bbc.com/vietnamese/institutional-49283563',
    },
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

const stories = storiesOf('Components|MostRead/Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob());

items.forEach(({ item, dir }) => {
  stories.add(`MostReadItem ${dir}`, ({ script, service }) => (
    <MostReadItem dir={dir} item={item} service={service} script={script} />
  ));
});

const item = {
  title: 'Stranded Indian ship put up for sale',
  href: 'https://www.bbc.com',
};

stories.add(`MostReadItem with last updated date`, ({ script, service }) => (
  <MostReadItem
    dir="ltr"
    item={item}
    service={service}
    script={script}
    lastUpdated={lastUpdated(script, service)}
  />
));

stories
  .add(`StyledCountSpan LTR`, ({ script, service }) => (
    <StyledCountSpan dir="ltr" service={service} script={script}>
      5
    </StyledCountSpan>
  ))
  .add(`StyledCountSpan LTR double digits`, ({ script, service }) => (
    <StyledCountSpan dir="ltr" service={service} script={script}>
      10
    </StyledCountSpan>
  ))
  .add(`StyledCountSpan RTL`, ({ script, service }) => (
    <StyledCountSpan dir="rtl" service={service} script={script}>
      ۲
    </StyledCountSpan>
  ));
