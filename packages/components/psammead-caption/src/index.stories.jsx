import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import Readme from '../README.md';
import Caption from '.';

storiesOf('Caption', module)
  .add('default', () => <Caption>This is a caption.</Caption>, {
    notes: Readme,
  })
  .add(
    'with offscreen text',
    () => (
      <Caption>
        <VisuallyHiddenText>Image caption, </VisuallyHiddenText>
        This is a caption with preceding offscreen text.
      </Caption>
    ),
    { notes: Readme },
  )
  .add(
    'containing an inline link',
    () => (
      <Caption>
        {'This is a caption '}
        <InlineLink href="https://www.bbc.com">
          containing an inline link
        </InlineLink>
        .
      </Caption>
    ),
    { notes: Readme },
  );
