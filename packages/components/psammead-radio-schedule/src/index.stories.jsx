import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { renderProgramCard, sentenceCase } from './testHelpers/helper';
import notes from '../README.md';
import StartTime from './StartTime';

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

stateTypes.forEach(state => {
  stories.add(
    `${state}`,
    () =>
      newsServiceDecorator(({ service }) =>
        renderProgramCard({ service, state, stateLabel: sentenceCase(state) }),
      ),
    { notes },
  );
});

stories.add(
  `Multiline episode title`,
  () =>
    newsServiceDecorator(({ service }) =>
      renderProgramCard({
        state: 'live',
        stateLabel: 'Live',
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
        state: stateTypes[0],
        stateLabel: 'مباشر',
        duration: 'PT30M',
        durationLabel: 'المدة الزمنية',
        service,
      }),
    ),
  { notes },
);

storiesOf('Components|RadioSchedule/StartTime', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
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
