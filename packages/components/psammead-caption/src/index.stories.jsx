import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { LANGUAGE_VARIANTS } from '@bbc/psammead-storybook-helpers/text-variants';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Caption from '.';

storiesOf('Caption', module)
  .addDecorator(withKnobs)
  .add(
    'custom - default',
    () => <Caption>{text('Content', 'This is a caption.')}</Caption>,
    {
      notes,
    },
  )
  .add(
    'preset - default',
    () => (
      <Caption>
        {select('Content', LANGUAGE_VARIANTS, 'This is a caption.')}
      </Caption>
    ),
    {
      notes,
    },
  )
  .add(
    'custom - with offscreen text',
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
    'preset - with offscreen text',
    () => (
      <Caption>
        <VisuallyHiddenText>
          {select('Hidden Text', LANGUAGE_VARIANTS, 'Image caption, ')}
        </VisuallyHiddenText>
        {select(
          'Content',
          LANGUAGE_VARIANTS,
          'This is a caption with preceding offscreen text.',
        )}
      </Caption>
    ),
    { notes },
  )
  .add(
    'custom - containing an inline link',
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
  )
  .add(
    'preset - containing an inline link',
    () => (
      <Caption>
        {select('Content', LANGUAGE_VARIANTS, 'This is a caption.')}
        <InlineLink href="https://www.bbc.com">
          {select(
            'Inline link',
            LANGUAGE_VARIANTS,
            'containing an inline link',
          )}
        </InlineLink>
        .
      </Caption>
    ),
    { notes },
  );
