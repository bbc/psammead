import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SectionLabel from './index';

export default {
  title: 'Components|SectionLabel',
  decorators: [withKnobs],
};

export const defaultStory = inputProvider({
  slots: [{ name: 'title', defaultText: 'Most Read' }],
  // eslint-disable-next-line react/prop-types
  componentFunction: ({ slotTexts: [title], script, dir, service }) => (
    <SectionLabel
      script={script}
      dir={dir}
      bar={boolean('show bar?', true)}
      visuallyHidden={boolean(
        'visually hide component for all breakpoints?',
        false,
      )}
      labelId="example-section-label"
      service={service}
    >
      {title}
    </SectionLabel>
  ),
});

defaultStory.story = {
  name: 'default',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export const withALink = inputProvider({
  slots: [{ name: 'title', defaultText: 'Most Read' }],
  // eslint-disable-next-line react/prop-types
  componentFunction: ({ slotTexts: [title], script, dir, service }) => (
    <SectionLabel
      script={script}
      dir={dir}
      bar={boolean('show bar?', true)}
      visuallyHidden={boolean(
        'visually hide component for all breakpoints?',
        false,
      )}
      labelId="example-section-label"
      service={service}
      linkText="See All"
      href="https://www.bbc.com/igbo"
    >
      {title}
    </SectionLabel>
  ),
});

withALink.story = {
  name: 'with a link',
  parameters: { notes, knobs: { escapeHTML: false } },
};
