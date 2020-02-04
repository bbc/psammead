import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import {
  renderProgramCard,
  renderRadioSchedule,
  sentenceCase,
  stateTypes,
} from './testHelpers/helper';
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

const radioScheduleStories = storiesOf(
  'Components|RadioSchedule',
  module,
).addDecorator(withKnobs);

radioScheduleStories.add(
  'default',
  () =>
    newsServiceDecorator(props => (
      <div style={{ backgroundColor: '#f2f2f2', padding: 20 }}>
        {renderRadioSchedule(props)}
      </div>
    )),
  { notes },
);

radioScheduleStories.add(
  'default RTL',
  () =>
    arabicServiceDecorator(props => (
      <div style={{ backgroundColor: '#f2f2f2', padding: 20 }}>
        {renderRadioSchedule(props)}
      </div>
    )),
  { notes },
);

const programCardStories = storiesOf(
  'Components|RadioSchedule/ProgramCard',
  module,
).addDecorator(withKnobs);

stateTypes.forEach(state => {
  programCardStories.add(
    `${state}`,
    () =>
      newsServiceDecorator(({ service }) =>
        renderProgramCard({ service, state, stateLabel: sentenceCase(state) }),
      ),
    { notes },
  );
});

programCardStories.add(
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

programCardStories.add(
  `Live RTL`,
  () =>
    arabicServiceDecorator(({ service }) =>
      renderProgramCard({
        state: stateTypes[0],
        stateLabel: 'مباشر',
        duration: '30:00',
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
