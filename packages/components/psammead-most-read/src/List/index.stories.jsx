import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import MostReadList from '.';
import { itemsLTR, itemsRTL } from '../testHelpers/fixtureData';

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

storiesOf('Components|MostRead/List/LTR', module)
  .addDecorator(withKnobs)
  .add(`News LTR`, () =>
    newsServiceDecorator(({ script, service }) => (
      <MostReadList
        items={itemsLTR}
        service={service}
        script={script}
        dir="ltr"
      />
    )),
  )
  .add(`Bengali LTR`, () =>
    bengaliServiceDecorator(({ script, service }) => (
      <MostReadList
        items={itemsLTR}
        service={service}
        script={script}
        dir="ltr"
      />
    )),
  )
  .add(`Burmese LTR`, () =>
    burmeseServiceDecorator(({ script, service }) => (
      <MostReadList
        items={itemsLTR}
        service={service}
        script={script}
        dir="ltr"
      />
    )),
  );

storiesOf('Components|MostRead/List/RTL', module)
  .addDecorator(withKnobs)
  .add(`Arabic RTL`, () =>
    arabicServiceDecorator(({ script, service }) => (
      <MostReadList
        items={itemsRTL}
        service={service}
        script={script}
        dir="rtl"
      />
    )),
  );
