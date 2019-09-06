import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import VisuallyHiddenText from './index';

storiesOf('Components|VisuallyHiddenText', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider({
      slots: [{ name: 'Visually hidden text' }],
      // eslint-disable-next-line react/prop-types
      componentFunction: ({ slotTexts: [hiddenText] }) => (
        <VisuallyHiddenText>{hiddenText}</VisuallyHiddenText>
      ),
    }),
    { notes, knobs: { escapeHTML: false } },
  );
