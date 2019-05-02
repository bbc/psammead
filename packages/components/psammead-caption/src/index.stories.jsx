import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import InlineLink from '@bbc/psammead-inline-link';
import Paragraph from '@bbc/psammead-paragraph';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { latin } from '@bbc/gel-foundations/scripts';
import notes from '../README.md';
import Caption from '.';

storiesOf('Caption', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(['caption'], captionText => (
      <Caption script={latin}>{captionText}</Caption>
    )),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with offscreen text',
    inputProvider(
      ['visually hidden text', 'caption'],
      (hiddenText, captionText) => (
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
    inputProvider(['inline link', 'caption'], (linkText, captionText) => (
      <Caption script={latin}>
        {captionText}
        <InlineLink href="https://www.bbc.com"> {linkText}</InlineLink>.
      </Caption>
    )),
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
  )
  .add(
    'containing multiple paragraphs',
    inputProvider([], () => (
      <Caption script={latin}>
        <Paragraph>Paragraph with padding bottom.</Paragraph>
        <Paragraph>
          Last paragraph - <i>without padding bottom</i>.
        </Paragraph>
      </Caption>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
