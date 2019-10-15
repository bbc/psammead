import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from '../README.md';
import VisuallyHiddenText from './index';
import withServicesKnob from '../../../utilities/psammead-storybook-helpers/src/withServicesKnob';

storiesOf('Components|VisuallyHiddenText', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, service }) => (
      <VisuallyHiddenText>
        {service === 'news' ? 'Visually hidden text' : text}
      </VisuallyHiddenText>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
