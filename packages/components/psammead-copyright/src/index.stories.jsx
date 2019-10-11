import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Copyright from './index';

export default {
  title: 'Components|Copyright',
  decorators: [withKnobs],
};

export const defaultStory = () => {
  const position = select('Position', ['left', 'right'], 'left');
  return (
    <Copyright position={position}>
      {text('copyright', 'Getty Images')}
    </Copyright>
  );
};

defaultStory.story = {
  name: 'default',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export const withVisuallyHiddenText = () => {
  const position = select('Position', ['left', 'right'], 'left');
  return (
    <Copyright position={position}>
      <VisuallyHiddenText>
        {text('visually hidden text', 'Image source, ')}
      </VisuallyHiddenText>
      {text('copyright', 'Getty Images')}
    </Copyright>
  );
};

withVisuallyHiddenText.story = {
  name: 'with visually hidden text',
  parameters: { notes, knobs: { escapeHTML: false } },
};
