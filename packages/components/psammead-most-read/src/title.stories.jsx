import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import MostReadTitle from './title';

const arabicServiceDecorator = withServicesKnob({
  defaultService: 'arabic',
});

const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});

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
