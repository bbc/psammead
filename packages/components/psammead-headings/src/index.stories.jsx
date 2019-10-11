import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import { Headline, SubHeading } from './index';

export default {
  title: 'Components|Headline',
  decorators: [withKnobs],
};

export const defaultStory = inputProvider({
  slots: [{ name: 'Headline' }],
  // eslint-disable-next-line react/prop-types
  componentFunction: ({ slotTexts: [headline], script, service }) => (
    <Headline script={script} service={service}>
      {headline}
    </Headline>
  ),
});

defaultStory.story = {
  name: 'default',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export default {
  title: 'Components|SubHeading',
  decorators: [withKnobs],
};

export const defaultStoryStory = inputProvider({
  slots: [{ name: 'SubHeading' }],
  // eslint-disable-next-line react/prop-types
  componentFunction: ({ slotTexts: [subheader], script, service }) => (
    <SubHeading script={script} service={service}>
      {subheader}
    </SubHeading>
  ),
});

defaultStoryStory.story = {
  name: 'default',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export const withOptionalId = inputProvider({
  slots: [{ name: 'SubHeading' }],
  // eslint-disable-next-line react/prop-types
  componentFunction: ({ slotTexts: [subheader], script, service }) => {
    const id = text('ID', 'foo', 'Other');
    return (
      <SubHeading id={id} script={script} service={service}>
        {subheader}
      </SubHeading>
    );
  },
});

withOptionalId.story = {
  name: 'with optional ID',
  parameters: { notes, knobs: { escapeHTML: false } },
};
