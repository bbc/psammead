import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from '../README.md';
import { inputProvider, dirDecorator } from '.';

export default {
  title: 'Utilities|Input Provider',
  decorators: [withKnobs],
};

export const simple = inputProvider({
  componentFunction: () => <span>I toggle dir based on language</span>,
});

simple.story = {
  name: 'simple',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export const simpleLimitedServices = inputProvider({
  componentFunction: () => (
    <span>Im only availible in news, pidgin & thai</span>
  ),
  services: ['news', 'pidgin', 'thai'],
});

simpleLimitedServices.story = {
  name: 'simple - limited services',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export const complex = inputProvider({
  slots: [
    {
      name: 'first slot',
      defaultText:
        "this slot overwrites the news default; the next one doesn't",
    },
    { name: 'second slot' },
  ],
  /* eslint-disable react/prop-types */
  componentFunction: ({
    slotTexts: [first, second],
    script,
    dir,
    service,
  }) => (
    <ul>
      <li>{first}</li>
      <li>{second}</li>
      <li>{service}</li>
      <li>Selected direction: {dir}</li>
      <li>
        Content of selected script:
        <pre>{JSON.stringify(script, null, ' ')}</pre>
      </li>
    </ul>
  ),
});

complex.story = {
  name: 'complex',
  parameters: { notes, knobs: { escapeHTML: false } },
};

export default {
  title: 'Utilities|Input Provider',
  decorators: [withKnobs, dirDecorator],
};

export const withDirDecorator = () => <span> I toogle dir based on language using dirDecorator</span>;

withDirDecorator.story = {
  name: 'with dirDecorator',
  parameters: { notes },
};
