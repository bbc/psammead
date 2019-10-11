/* eslint-disable react/prop-types */

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import InlineLink from '@bbc/psammead-inline-link';
import notes from '../README.md';
import Paragraph from './index';

export default {
  title: 'Components|Paragraph',
  decorators: [withKnobs],
};

export const defaultStory = inputProvider({
  slots: [{ name: 'Paragraph' }],
  componentFunction: ({ slotTexts: [paragraph], script, service }) => (
    <Paragraph script={script} service={service}>
      {paragraph}
    </Paragraph>
  ),
});

defaultStory.story = {
  name: 'default',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export const containingAnInlineLink = inputProvider({
  slots: [{ name: 'Paragraph' }, { name: 'Inline link' }],
  componentFunction: ({
    slotTexts: [paragraph, linkText],
    script,
    service,
  }) => (
    <Paragraph script={script} service={service}>
      {`${paragraph} `}
      <InlineLink href="https://www.bbc.com">{linkText}</InlineLink>
      {` ${paragraph}`}
    </Paragraph>
  ),
});

containingAnInlineLink.story = {
  name: 'containing an inline link',
  parameters: { notes, knobs: { escapeHTML: false } },
};
