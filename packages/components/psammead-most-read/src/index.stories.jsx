/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Timestamp from '@bbc/psammead-timestamp';
import MostReadList from './List';
import MostReadTitle from './Title';
import { MostReadLink, MostReadRank } from './Item';
import { items, itemsRTL, items5 } from './testHelpers/fixtureData';
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

const renderLTRList = ({ service, script }) => (
  <MostReadList items={items} service={service} script={script} dir="ltr" />
);

const renderTRLList = ({ service, script }) => (
  <MostReadList items={itemsRTL} service={service} script={script} dir="rtl" />
);

const renderLTRList5 = ({ service, script }) => (
  <MostReadList items={items5} service={service} script={script} dir="ltr" />
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

[items[0], itemsRTL[0]].forEach(({ service: itemService, ...props }) => {
  stories.add(`MostReadLink ${itemService}`, ({ script, service }) => (
    <MostReadLink link={props} service={service} script={script} />
  ));
});

stories.add(`MostReadLink with last updated date`, ({ script, service }) => (
  <MostReadLink
    link={items[0]}
    lastUpdated={lastUpdated(script, service)}
    service={service}
    script={script}
  />
));

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
    newsServiceDecorator(({ script, service }) =>
      renderLTRList({ service, script }),
    ),
  )
  .add(`News LTR 5 items`, () =>
    newsServiceDecorator(({ script, service }) =>
      renderLTRList5({ service, script }),
    ),
  )
  .add(`Bengali LTR`, () =>
    bengaliServiceDecorator(({ script, service }) =>
      renderLTRList({ service, script }),
    ),
  )
  .add(`Burmese LTR`, () =>
    burmeseServiceDecorator(({ script, service }) =>
      renderLTRList({ service, script }),
    ),
  );

storiesOf('Components|MostRead/List/RTL', module)
  .addDecorator(withKnobs)
  .add(`Arabic RTL`, () =>
    arabicServiceDecorator(({ script, service }) =>
      renderTRLList({ service, script }),
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
    newsServiceDecorator(({ script, service }) => (
      <MostRead
        items={items}
        service={service}
        script={script}
        dir="ltr"
        header="Most Read"
      />
    )),
  )
  .add('default RTL', () =>
    arabicServiceDecorator(({ script, service }) => (
      <MostRead
        items={itemsRTL}
        service={service}
        script={script}
        dir="rtl"
        header="الأكثر قراءة"
      />
    )),
  );
