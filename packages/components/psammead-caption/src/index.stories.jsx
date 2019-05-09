import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import InlineLink from '@bbc/psammead-inline-link';
import Paragraph from '@bbc/psammead-paragraph';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Caption from '.';

storiesOf('Caption', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider([{ name: 'Caption' }], ([captionText], script) => (
      <Caption script={script}>{captionText}</Caption>
    )),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with offscreen text',
    inputProvider(
      [
        { name: 'Visual hidden text', defaultText: 'visually hidden text' },
        { name: 'Caption', defaultText: 'caption' },
      ],
      ([hiddenText, captionText], script) => (
        <Caption script={script}>
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
      ([linkText, captionText], script) => (
        <Caption script={script}>
          {captionText}
          <InlineLink href="https://www.bbc.com"> {linkText}</InlineLink>.
        </Caption>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'containing italicisation',
    inputProvider([], (inputs, script) => (
      <Caption script={script}>
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
