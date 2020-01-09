/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { getItem, getItemWrapperArray, getItems } from './testHelpers';
import {
  MostReadRank,
  MostReadLink,
  MostReadTitle,
  MostReadList,
  MostRead,
} from './index';

const arabicServiceDecorator = withServicesKnob({
  defaultService: 'arabic',
  services: ['arabic', 'pashto', 'persian', 'urdu'],
});

const bengaliServiceDecorator = withServicesKnob({
  defaultService: 'bengali',
  services: ['bengali'],
});

const burmeseServiceDecorator = withServicesKnob({
  defaultService: 'burmese',
  services: ['burmese'],
});

const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});

const renderMostReadTitle = ({ header, service, script, dir }) => (
  <MostReadTitle
    header={header}
    script={script}
    service={service}
    dir={{ dir }}
  />
);

const renderList = ({ numberOfItems, dir, service, script }) => (
  <MostReadList numberOfItems={numberOfItems} dir={dir}>
    {getItemWrapperArray({
      numberOfItems,
      service,
      script,
      dir,
    }).map(item => item)}
  </MostReadList>
);

const renderLink = ({ dir, service, script, withTimestamp }) => (
  <MostReadLink
    dir={dir}
    href={getItem(service).href}
    service={service}
    script={script}
    title={getItem(service).title}
  >
    {getItem(service, withTimestamp).timestamp}
  </MostReadLink>
);

const renderRank = ({ dir, service, script, listIndex, numberOfItems }) => (
  <MostReadRank
    service={service}
    script={script}
    listIndex={listIndex}
    numberOfItems={numberOfItems}
    dir={dir}
  />
);

storiesOf('Components|MostRead/Rank', module)
  .addDecorator(withKnobs)
  .add(`MostReadRank LTR`, () =>
    newsServiceDecorator(({ dir, script, service }) =>
      renderRank({ dir, service, script, listIndex: 5, numberOfItems: 5 }),
    ),
  )
  .add(`MostReadRank LTR double digits`, () =>
    newsServiceDecorator(({ script, service, dir }) =>
      renderRank({ dir, service, script, listIndex: 10, numberOfItems: 10 }),
    ),
  )
  .add(`MostReadRank RTL`, () =>
    arabicServiceDecorator(({ dir, script, service }) =>
      renderRank({ dir, service, script, listIndex: 5, numberOfItems: 5 }),
    ),
  )
  .add(`MostReadRank RTL double digits`, () =>
    arabicServiceDecorator(({ dir, script, service }) =>
      renderRank({ dir, service, script, listIndex: 10, numberOfItems: 10 }),
    ),
  );

storiesOf('Components|MostRead/Item', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(`MostReadLink`, ({ dir, script, service }) =>
    renderLink({ dir, script, service, withTimestamp: false }),
  )
  .add(`MostReadLink with last updated date`, ({ dir, script, service }) =>
    renderLink({ dir, script, service, withTimestamp: true }),
  );

storiesOf('Components|MostRead/List', module)
  .addDecorator(withKnobs)
  .add(`News LTR`, () =>
    newsServiceDecorator(({ dir, script, service }) =>
      renderList({ numberOfItems: 10, dir, service, script }),
    ),
  )
  .add(`News LTR 5 items`, () =>
    newsServiceDecorator(({ dir, script, service }) =>
      renderList({ numberOfItems: 5, dir, service, script }),
    ),
  )
  .add(`Bengali LTR`, () =>
    bengaliServiceDecorator(({ dir, script, service }) =>
      renderList({ numberOfItems: 10, dir, service, script }),
    ),
  )
  .add(`Bengali LTR 5 items`, () =>
    bengaliServiceDecorator(({ dir, script, service }) =>
      renderList({ numberOfItems: 5, dir, service, script }),
    ),
  )
  .add(`Burmese LTR`, () =>
    burmeseServiceDecorator(({ dir, script, service }) =>
      renderList({ numberOfItems: 10, dir, service, script }),
    ),
  )
  .add(`Burmese LTR 5 items`, () =>
    burmeseServiceDecorator(({ dir, script, service }) =>
      renderList({ numberOfItems: 5, dir, service, script }),
    ),
  );

storiesOf('Components|MostRead/List/RTL', module)
  .addDecorator(withKnobs)
  .add(`Arabic RTL`, () =>
    arabicServiceDecorator(({ dir, script, service }) =>
      renderList({ numberOfItems: 10, dir, service, script }),
    ),
  )
  .add(`Arabic RTL 5 items`, () =>
    arabicServiceDecorator(({ dir, script, service }) =>
      renderList({ numberOfItems: 5, dir, service, script }),
    ),
  );

storiesOf('Components|MostRead/Title', module)
  .addDecorator(withKnobs)
  .add('LTR', () =>
    newsServiceDecorator(({ dir, script, service }) =>
      renderMostReadTitle({ header: 'Most Read', dir, service, script }),
    ),
  )
  .add('RTL', () =>
    arabicServiceDecorator(({ dir, script, service }) =>
      renderMostReadTitle({ header: 'الأكثر قراءة', dir, service, script }),
    ),
  );

storiesOf('Components|MostRead', module)
  .addDecorator(withKnobs)
  .add('default LTR', () =>
    newsServiceDecorator(({ script, service, dir }) => (
      <MostRead
        items={getItems('news', 10)}
        script={script}
        service={service}
        header="Most Read"
        dir={dir}
      />
    )),
  )
  .add('default RTL', () =>
    arabicServiceDecorator(({ script, service, dir }) => (
      <MostRead
        items={getItems('arabic', 10)}
        script={script}
        service={service}
        header="الأكثر قراءة"
        dir={dir}
      />
    )),
  );
