import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider, dirDecorator } from '@bbc/psammead-storybook-helpers';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Caption from '.';

storiesOf('Components|Caption', module)
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
          {`${captionText} `}
          <InlineLink href="https://www.bbc.com">{linkText}</InlineLink>.
          {` ${captionText} `}
        </Caption>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );

storiesOf('Components|Caption', module)
  .addDecorator(withKnobs)
  .addDecorator(dirDecorator)
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
    inputProvider([], (inputs, script) => (
      <Caption script={script}>
        <p>Paragraph with padding bottom.</p>
        <p>
          Last paragraph - <i>without padding bottom</i>.
        </p>
      </Caption>
    )),
    { notes, knobs: { escapeHTML: false } },
  );
