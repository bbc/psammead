import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { latin } from '@bbc/gel-foundations/scripts';
import notes from '../README.md';
import Caption from '.';

storiesOf('Caption', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [{ name: 'Caption', defaultText: 'caption' }],
      ([captionText]) => <Caption script={latin}>{captionText}</Caption>,
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with offscreen text',
    inputProvider(
      [
        { name: 'Visual hidden text', defaultText: 'visually hidden text' },
        { name: 'Caption', defaultText: 'caption' },
      ],
      ([hiddenText, captionText]) => (
        <Caption script={latin}>
          <VisuallyHiddenText>{hiddenText}</VisuallyHiddenText>
          {captionText}
        </Caption>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'containing an inline link',
    inputProvider(
      [
        { name: 'Inline link', defaultText: 'inline link' },
        { name: 'Caption', defaultText: 'caption' },
      ],
      ([linkText, captionText]) => (
        <Caption script={latin}>
          {captionText}
          <InlineLink href="https://www.bbc.com"> {linkText}</InlineLink>.
        </Caption>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'containing italicisation',
    inputProvider([], () => (
      <Caption script={latin}>
        Example text with <i>italics</i>
      </Caption>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
