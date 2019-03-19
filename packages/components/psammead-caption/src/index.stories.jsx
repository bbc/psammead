import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Caption from '.';

storiesOf('Caption', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => <Caption>{text('Content', 'This is a caption.')}</Caption>,
    {
      notes,
    },
  )
  .add(
    'with offscreen text',
    () => (
      <Caption>
        <VisuallyHiddenText>
          {text('Hidden Text', 'Image caption, ')}
        </VisuallyHiddenText>
        {text('Content', 'This is a caption with preceding offscreen text.')}
      </Caption>
    ),
    { notes },
  )
  .add(
    'containing an inline link',
    () => (
      <Caption>
        {text('Content', 'This is a caption ')}
        <InlineLink href="https://www.bbc.com">
          {text('Inline link', 'containing an inline link')}
        </InlineLink>
        .
      </Caption>
    ),
    { notes },
  );
