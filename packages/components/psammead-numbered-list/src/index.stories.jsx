import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import NumberedList, { NumberedListItem } from './index';

storiesOf('Components/NumberedList', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, script, service, dir }) => (
      <NumberedList dir={dir} script={script} service={service}>
        <NumberedListItem>{text}</NumberedListItem>
        <NumberedListItem>
          {text} {text}
        </NumberedListItem>
        <NumberedListItem>{text.substring(0, 10)}</NumberedListItem>
        <NumberedListItem>
          {text} {text} {text} {text}
        </NumberedListItem>
      </NumberedList>
    ),
    { notes },
  );
