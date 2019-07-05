import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { dirDecorator } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Copyright from './index';

storiesOf('Components|Copyright', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
  .add(
    'default',
    ({ service }) => {
      const position = select('Position', ['left', 'right'], 'left');
      return (
        <Copyright position={position} service={service}>
          {text('copyright', 'Getty Images')}
        </Copyright>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with visually hidden text',
    ({ service }) => {
      const position = select('Position', ['left', 'right'], 'left');
      return (
        <Copyright position={position} service={service}>
          <VisuallyHiddenText>
            {text('visually hidden text', 'Image source, ')}
          </VisuallyHiddenText>
          {text('copyright', 'Getty Images')}
        </Copyright>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  );
