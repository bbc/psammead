/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Timestamp from '@bbc/psammead-timestamp';
import MostReadList from './List';
import MostReadTitle from './Title';
import { MostReadLink, MostReadRank } from './Item';
import MostRead from './index';

const arabicServiceDecorator = withServicesKnob({
  defaultService: 'arabic',
});

const bengaliServiceDecorator = withServicesKnob({
  defaultService: 'bengali',
});

const burmeseServiceDecorator = withServicesKnob({
  defaultService: 'burmese',
});

const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});

const BASE_PATH = 'https://www.bbc.com';

const getItem = (path, text) => ({ title: text, href: `${BASE_PATH}${path}` });

const getItems = (path, text) => Array(10).fill(getItem(path, text));

const renderLTRList = ({ service, script, path, text }) => (
  <MostReadList
    items={getItems(path, text)}
    service={service}
    script={script}
    dir="ltr"
  />
);

const renderRTLList = ({ service, script, path, text }) => (
  <MostReadList
    items={getItems(path, text)}
    service={service}
    script={script}
    dir="rtl"
  />
);

const renderMostReadRank = ({ service, script, rank }) => (
  <MostReadRank service={service} script={script}>
    {rank}
  </MostReadRank>
);

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

stories.add(`MostReadLink`, ({ script, service, path, text }) => (
  <MostReadLink link={getItem(path, text)} service={service} script={script} />
));

stories.add(
  `MostReadLink with last updated date`,
  ({ script, service, path, text }) => (
    <MostReadLink
      link={getItem(path, text)}
      lastUpdated={lastUpdated(script, service)}
      service={service}
      script={script}
    />
  ),
);

stories
  .add(`MostReadRank LTR`, ({ script, service }) =>
    renderMostReadRank({ service, script, rank: 5 }),
  )
  .add(`MostReadRank LTR double digits`, ({ script, service }) =>
    renderMostReadRank({ service, script, rank: 10 }),
  )
  .add(`MostReadRank RTL`, ({ script, service }) =>
    renderMostReadRank({ service, script, rank: '۲' }),
  );

storiesOf('Components|MostRead/List/LTR', module)
  .addDecorator(withKnobs)
  .add(`News LTR`, () =>
    newsServiceDecorator(({ script, service, path, text }) =>
      renderLTRList({ service, script, path, text }),
    ),
  )
  .add(`Bengali LTR`, () =>
    bengaliServiceDecorator(({ script, service, path, text }) =>
      renderLTRList({ service, script, path, text }),
    ),
  )
  .add(`Burmese LTR`, () =>
    burmeseServiceDecorator(({ script, service, path, text }) =>
      renderLTRList({ service, script, path, text }),
    ),
  );

storiesOf('Components|MostRead/List/RTL', module)
  .addDecorator(withKnobs)
  .add(`Arabic RTL`, () =>
    arabicServiceDecorator(({ script, service, path, text }) =>
      renderRTLList({ service, script, path, text }),
    ),
  );

storiesOf('Components|MostRead/Title', module)
  .addDecorator(withKnobs)
  .add('LTR', () =>
    newsServiceDecorator(({ script, service }) => (
      <MostReadTitle
        header="Most Read"
        script={script}
        service={service}
        dir="ltr"
      />
    )),
  )
  .add('RTL', () =>
    arabicServiceDecorator(({ script, service }) => (
      <MostReadTitle
        header="الأكثر قراءة"
        script={script}
        service={service}
        dir="rtl"
      />
    )),
  );

storiesOf('Components|MostRead', module)
  .addDecorator(withKnobs)
  .add('default LTR', () =>
    newsServiceDecorator(({ script, service, path, text }) => (
      <MostRead
        items={getItems(path, text)}
        service={service}
        script={script}
        dir="ltr"
        header="Most Read"
      />
    )),
  )
  .add('default RTL', () =>
    arabicServiceDecorator(({ script, service, path, text }) => (
      <MostRead
        items={getItems(path, text)}
        service={service}
        script={script}
        dir="rtl"
        header="الأكثر قراءة"
      />
    )),
  );
