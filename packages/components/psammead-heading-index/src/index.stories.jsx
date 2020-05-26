import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import IndexH1 from './index';

storiesOf('Components|Index Heading', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text: textSnippet, script, service }) => (
      <IndexH1 script={script} service={service}>
        {textSnippet}
      </IndexH1>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with optional ID',
    ({ text: textSnippet, script, service }) => {
      const id = text('ID', 'content', 'Other');
      return (
        <IndexH1 id={id} script={script} service={service}>
          {textSnippet}
        </IndexH1>
      );
    },
    { notes, knobs: { escapeHTML: false } },
  );
