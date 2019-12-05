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

const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});

const BASE_PATH = 'https://www.bbc.com';
const getItem = (articlePath, text) => ({
  title: text,
  href: `${BASE_PATH}${articlePath}`,
});

const getItems = (articlePath, text) =>
  Array(10).fill(getItem(articlePath, text));

const renderLTRList = ({ service, script, articlePath, text, dir }) => (
  <MostReadList
    items={getItems(articlePath, text)}
    service={service}
    script={script}
    dir={dir}
  />
);

const renderRTLList = ({ service, script, articlePath, text, dir }) => (
  <MostReadList
    items={getItems(articlePath, text)}
    service={service}
    script={script}
    dir={dir}
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

storiesOf('Components|MostRead/Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(`MostReadLink`, ({ script, service, articlePath, text }) => (
    <MostReadLink
      link={getItem(articlePath, text)}
      service={service}
      script={script}
    />
  ))
  .add(
    `MostReadLink with last updated date`,
    ({ script, service, articlePath, text }) => (
      <MostReadLink
        link={getItem(articlePath, text)}
        lastUpdated={lastUpdated(script, service)}
        service={service}
        script={script}
      />
    ),
  )
  .add(`MostReadRank LTR`, ({ script, service }) =>
    renderMostReadRank({ service, script, rank: 5 }),
  )
  .add(`MostReadRank LTR double digits`, ({ script, service }) =>
    renderMostReadRank({ service, script, rank: 10 }),
  )
  .add(`MostReadRank RTL`, ({ script, service }) =>
    renderMostReadRank({ service, script, rank: '۲' }),
  );

storiesOf('Components|MostRead/List', module)
  .addDecorator(withKnobs)
  .add(`LTR`, () =>
    newsServiceDecorator(({ script, service, articlePath, text, dir }) =>
      renderLTRList({ service, script, articlePath, text, dir }),
    ),
  )
  .add(`RTL`, () =>
    arabicServiceDecorator(({ script, service, articlePath, text, dir }) =>
      renderRTLList({ service, script, articlePath, text, dir }),
    ),
  );

storiesOf('Components|MostRead/Title', module)
  .addDecorator(withKnobs)
  .add('LTR', () =>
    newsServiceDecorator(({ script, service, dir }) => (
      <MostReadTitle
        header="Most Read"
        script={script}
        service={service}
        dir={dir}
      />
    )),
  )
  .add('RTL', () =>
    arabicServiceDecorator(({ script, service, dir }) => (
      <MostReadTitle
        header="الأكثر قراءة"
        script={script}
        service={service}
        dir={dir}
      />
    )),
  );

storiesOf('Components|MostRead', module)
  .addDecorator(withKnobs)
  .add('default LTR', () =>
    newsServiceDecorator(({ script, service, articlePath, text, dir }) => (
      <MostRead
        items={getItems(articlePath, text)}
        service={service}
        script={script}
        dir={dir}
        header="Most Read"
      />
    )),
  )
  .add('default RTL', () =>
    arabicServiceDecorator(({ script, service, articlePath, text, dir }) => (
      <MostRead
        items={getItems(articlePath, text)}
        service={service}
        script={script}
        dir={dir}
        header="الأكثر قراءة"
      />
    )),
  );
