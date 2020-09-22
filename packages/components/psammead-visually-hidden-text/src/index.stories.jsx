import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

import VisuallyHiddenText from './index';

storiesOf('Components/VisuallyHiddenText', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, service }) => (
      <VisuallyHiddenText>
        {service === 'news' ? 'Visually hidden text' : text}
      </VisuallyHiddenText>
    ),
    { knobs: { escapeHTML: false } },
  );
