import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import VisuallyHiddenText from './index';

export default {
  title: 'Components|VisuallyHiddenText',
  decorators: [withKnobs],
};

export const defaultStory = inputProvider({
  slots: [{ name: 'Visually hidden text' }],
  // eslint-disable-next-line react/prop-types
  componentFunction: ({ slotTexts: [hiddenText] }) => (
    <VisuallyHiddenText>{hiddenText}</VisuallyHiddenText>
  ),
});

defaultStory.story = {
  name: 'default',
  parameters: { notes, knobs: { escapeHTML: false } },
};
