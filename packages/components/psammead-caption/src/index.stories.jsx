import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Caption from '.';

storiesOf('Caption', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(['caption'], captionText => <Caption>{captionText}</Caption>),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with offscreen text',
    inputProvider(
      ['visually hidden text', 'caption'],
      (hiddenText, captionText) => (
        <Caption>
          <VisuallyHiddenText>{hiddenText}</VisuallyHiddenText>
          {captionText}
        </Caption>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'containing an inline link',
    inputProvider(['inline link', 'caption'], (linkText, captionText) => (
      <Caption>
        {captionText}
        <InlineLink href="https://www.bbc.com"> {linkText}</InlineLink>.
      </Caption>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
