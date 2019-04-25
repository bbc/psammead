import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from '../README.md';
import { inputProvider } from '.';

storiesOf('Input Provider', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      [
        {
          name: 'first slot',
          defaultText:
            "this slot overwrites the English default; the next one doesn't",
        },
        { name: 'second slot' },
      ],
      ([first, second], script, dir) => (
        <ul dir={dir}>
          <li>{first}</li>
          <li>{second}</li>
          <li>Selected direction: {dir}</li>
          <li>
            Content of selected script:
            <pre>{JSON.stringify(script, null, ' ')}</pre>
          </li>
        </ul>
      ),
    ),
    { notes, knobs: { escapeHTML: false } },
  );
