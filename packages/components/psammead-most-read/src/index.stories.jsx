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
import { getItem, getItems } from './testHelpers/itemsHelper';

const arabicServiceDecorator = withServicesKnob({
  defaultService: 'arabic',
});

const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});

const renderMostReadTitle = ({ header, service, script, dir }) => (
  <MostReadTitle header={header} script={script} service={service} dir={dir} />
);

const renderList = ({ service, script, dir }) => (
  <MostReadList
    items={getItems(service)}
    service={service}
    script={script}
    dir={dir}
  />
);

const renderMostRead = ({ service, script, dir, header }) => (
  <MostRead
    items={getItems(service)}
    service={service}
    script={script}
    dir={dir}
    header={header}
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
  .add(`MostReadLink`, ({ script, service }) => (
    <MostReadLink link={getItem(service)} service={service} script={script} />
  ))
  .add(`MostReadLink with last updated date`, ({ script, service }) => (
    <MostReadLink
      link={getItem(service)}
      lastUpdated={lastUpdated(script, service)}
      service={service}
      script={script}
    />
  ))
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
    newsServiceDecorator(({ script, service, dir }) =>
      renderList({ service, script, dir }),
    ),
  )
  .add(`RTL`, () =>
    arabicServiceDecorator(({ script, service, dir }) =>
      renderList({ service, script, dir }),
    ),
  );

storiesOf('Components|MostRead/Title', module)
  .addDecorator(withKnobs)
  .add('LTR', () =>
    newsServiceDecorator(({ script, service, dir }) =>
      renderMostReadTitle({ service, dir, script, header: 'Most Read' }),
    ),
  )
  .add('RTL', () =>
    arabicServiceDecorator(({ script, service, dir }) =>
      renderMostReadTitle({ service, dir, script, header: 'الأكثر قراءة' }),
    ),
  );

storiesOf('Components|MostRead', module)
  .addDecorator(withKnobs)
  .add('default LTR', () =>
    newsServiceDecorator(({ script, service, dir }) =>
      renderMostRead({ script, service, dir, header: 'Most Read' }),
    ),
  )
  .add('default RTL', () =>
    arabicServiceDecorator(({ script, service, dir }) =>
      renderMostRead({ script, service, dir, header: 'الأكثر قراءة' }),
    ),
  );
