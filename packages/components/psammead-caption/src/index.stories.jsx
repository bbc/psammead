import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider, dirDecorator } from '@bbc/psammead-storybook-helpers';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import notes from '../README.md';
import Caption from '.';

export default {
  title: 'Components|Caption',
  decorators: [withKnobs],
};

export const defaultStory = inputProvider({
  slots: [{ name: 'Caption' }],
  /* eslint-disable react/prop-types */
  componentFunction: ({ slotTexts: [captionText], script, service }) => (
    <Caption script={script} service={service}>
      {captionText}
    </Caption>
  ),
});

defaultStory.story = {
  name: 'default',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export const withOffscreenText = inputProvider({
  slots: [
    { name: 'Visual hidden text', defaultText: 'visually hidden text' },
    { name: 'Caption', defaultText: 'caption' },
  ],
  componentFunction: ({
    slotTexts: [hiddenText, captionText],
    script,
    service,
  }) => (
    <Caption script={script} service={service}>
      <VisuallyHiddenText>{hiddenText}</VisuallyHiddenText>
      {captionText}
    </Caption>
  ),
});

withOffscreenText.story = {
  name: 'with offscreen text',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export const containingAnInlineLink = inputProvider({
  slots: [
    { name: 'Inline link', defaultText: 'inline link' },
    { name: 'Caption', defaultText: 'caption' },
  ],
  componentFunction: ({
    slotTexts: [linkText, captionText],
    script,
    service,
  }) => (
    <Caption script={script} service={service}>
      {`${captionText} `}
      <InlineLink href="https://www.bbc.com">{linkText}</InlineLink>
      {` ${captionText} `}
    </Caption>
  ),
});

containingAnInlineLink.story = {
  name: 'containing an inline link',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export default {
  title: 'Components|Caption',
  decorators: [withKnobs, dirDecorator],
};

export const containingItalicisation = inputProvider({
  componentFunction: ({ script, service }) => (
    <Caption script={script} service={service}>
      Example text with <i>italics</i>
    </Caption>
  ),
});

containingItalicisation.story = {
  name: 'containing italicisation',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export const containingMultipleParagraphs = inputProvider({
  componentFunction: ({ script, service }) => (
    <Caption script={script} service={service}>
      <p>Paragraph with padding bottom.</p>
      <p>
        Last paragraph - <i>without padding bottom</i>.
      </p>
    </Caption>
  ),
});

containingMultipleParagraphs.story = {
  name: 'containing multiple paragraphs',
  parameters: { notes, knobs: { escapeHTML: false } },
};
