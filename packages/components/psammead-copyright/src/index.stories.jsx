import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';

import Copyright from './index';

storiesOf('Components/Copyright', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      const position = select('Position', ['left', 'right'], 'left');
      return (
        <Copyright position={position}>
          {text('copyright', 'Getty Images')}
        </Copyright>
      );
    },
    { knobs: { escapeHTML: false } },
  )
  .add(
    'with visually hidden text',
    () => {
      const position = select('Position', ['left', 'right'], 'left');
      return (
        <Copyright position={position}>
          <VisuallyHiddenText>
            {text('visually hidden text', 'Image source, ')}
          </VisuallyHiddenText>
          {text('copyright', 'Getty Images')}
        </Copyright>
      );
    },
    { knobs: { escapeHTML: false } },
  );
