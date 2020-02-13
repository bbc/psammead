import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  withServicesKnob,
  buildRTLSubstories,
} from '@bbc/psammead-storybook-helpers';
import {
  renderProgramCard,
  renderRadioSchedule,
  sentenceCase,
  stateTypes,
} from './testHelpers/helper';
import notes from '../README.md';
import StartTime from './StartTime';

const storiesUnixTimestamp = 1566914061212;

const RADIO_SCHEDULE_STORIES = 'Components|RadioSchedule';
const radioScheduleStories = storiesOf(RADIO_SCHEDULE_STORIES, module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob());

radioScheduleStories.add('default', props => renderRadioSchedule(props), {
  notes,
});

radioScheduleStories.add(
  'Schedule with different heights',
  props => renderRadioSchedule({ ...props, withLongSummary: true }),
  { notes },
);

buildRTLSubstories(RADIO_SCHEDULE_STORIES, {
  include: ['default'],
});

const PROGRAM_CARD_STORIES = 'Components|RadioSchedule/ProgramCard';
const programCardStories = storiesOf(PROGRAM_CARD_STORIES, module).addDecorator(
  withKnobs,
);

stateTypes.forEach(state => {
  programCardStories.add(
    `${state}`,
    ({ service }) =>
      renderProgramCard({ service, state, stateLabel: sentenceCase(state) }),
    { notes },
  );
});

programCardStories.add(
  `Multiline episode title`,
  ({ service }) =>
    renderProgramCard({
      state: 'live',
      stateLabel: 'Live',
      service,
      episodeTitle: 'This is a long episode title that spans multiple lines',
    }),
  { notes },
);

buildRTLSubstories(PROGRAM_CARD_STORIES, {
  include: [...stateTypes],
});

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
