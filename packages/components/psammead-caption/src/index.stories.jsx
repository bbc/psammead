import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import Caption from './index';

storiesOf('Caption', module)
  .add('default', () => <Caption>This is a caption.</Caption>)
  .add('with offscreen text', () => (
    <Caption>
      <VisuallyHiddenText>Image caption, </VisuallyHiddenText>
      This is a caption with preceding offscreen text.
    </Caption>
  ))
  .add('containing an inline link', () => (
    <Caption>
      {'This is a caption '}
      <InlineLink href="https://www.bbc.com">
        containing an inline link
      </InlineLink>
      .
    </Caption>
  ));
