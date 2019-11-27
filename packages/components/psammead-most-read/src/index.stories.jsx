/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import Timestamp from '@bbc/psammead-timestamp';
import MostReadList from './List';
import MostReadTitle from './Title';
import { MostReadLink, MostReadRank } from './Item';
import { itemsLTR, itemsRTL, links } from './testHelpers/fixtureData';
import {
  arabicServiceDecorator,
  bengaliServiceDecorator,
  burmeseServiceDecorator,
  newsServiceDecorator,
} from './testHelpers/stories';
import MostRead from './index';

const renderLTRList = ({ service, script }) => (
  <MostReadList items={itemsLTR} service={service} script={script} dir="ltr" />
);

const renderTRLList = ({ service, script }) => (
  <MostReadList items={itemsRTL} service={service} script={script} dir="rtl" />
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

links.forEach(({ language, ...props }) => {
  stories.add(`MostReadLink ${language}`, ({ script, service }) => (
    <MostReadLink link={props} service={service} script={script} />
  ));
});

stories.add(`MostReadLink with last updated date`, ({ script, service }) => (
  <MostReadLink
    link={links[0]}
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
        items={itemsLTR}
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
