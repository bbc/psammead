import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import RadioSchedule from './index';
import StartTime from './StartTime';

storiesOf('Components|RadioSchedule', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add('default', () => <RadioSchedule />, { notes })
  .add(
    'Start Time',
    ({ locale, script, service }) => {
      return (
        <StartTime
          timestamp={1566914061212}
          timezone="Europe/London"
          locale={locale}
          script={script}
          service={service}
        />
      );
    },
    { notes },
  );
