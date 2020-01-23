import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { renderProgramCard } from './testHelpers/helper';
import notes from '../README.md';
import StartTime, { StartTimestamp } from './StartTime';

const storiesUnixTimestamp = 1566914061212;

const newsServiceDecorator = withServicesKnob({
  defaultService: 'news',
});

const arabicServiceDecorator = withServicesKnob({
  defaultService: 'arabic',
  services: ['arabic', 'pashto', 'persian', 'urdu'],
});

const stateTypes = ['live', 'next', 'onDemand'];

const stories = storiesOf(
  'Components|RadioSchedule/ProgramCard',
  module,
).addDecorator(withKnobs);

stateTypes.forEach(type => {
  stories.add(
    `${type}`,
    () =>
      newsServiceDecorator(({ service }) =>
        renderProgramCard({ service, state: { type, translation: type } }),
      ),
    { notes },
  );
});

stories.add(
  `Multiline episode title`,
  () =>
    newsServiceDecorator(({ service }) =>
      renderProgramCard({
        state: {
          type: stateTypes[0],
          translation: 'live',
        },
        service,
        episodeTitle: 'This is a long episode title that spans multiple lines',
      }),
    ),
  { notes },
);

stories.add(
  `Live RTL`,
  () =>
    arabicServiceDecorator(({ service }) =>
      renderProgramCard({
        state: { type: stateTypes[0], translation: 'مباشر' },
        duration: { durationValue: '30:00', durationText: 'المدة الزمنية' },
        service,
      }),
    ),
  { notes },
);

storiesOf('Components|RadioSchedule/StartTime', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'Timestamp',
    ({ locale, script, service }) => {
      return (
        <StartTimestamp
          timestamp={storiesUnixTimestamp}
          timezone="Europe/London"
          locale={locale}
          script={script}
          service={service}
        />
      );
    },
    { notes },
  )
  .add(
    'Start time',
    ({ locale, script, service, dir }) => {
      return (
        <StartTime
          timestamp={storiesUnixTimestamp}
          timezone="Europe/London"
          locale={locale}
          script={script}
          service={service}
          dir={dir}
        />
      );
    },
    { notes },
  );
