import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { latin } from '@bbc/gel-foundations/scripts';
import notes from '../README.md';
import Caption from '.';

storiesOf('Caption', module)
  .add('default', () => <Caption script={latin}>This is a caption.</Caption>, {
    notes,
  })
  .add(
    'with offscreen text',
    () => (
      <Caption script={latin}>
        <VisuallyHiddenText>Image caption, </VisuallyHiddenText>
        This is a caption with preceding offscreen text.
      </Caption>
    ),
    { notes },
  )
  .add(
    'containing an inline link',
    () => (
      <Caption script={latin}>
        {'This is a caption '}
        <InlineLink href="https://www.bbc.com">
          containing an inline link
        </InlineLink>
        .
      </Caption>
    ),
    { notes },
  );
