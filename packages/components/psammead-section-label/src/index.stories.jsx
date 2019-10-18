import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SectionLabel from './index';

storiesOf('Components|SectionLabel', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, script, dir, service }) => (
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
        {service === 'news' ? 'Most Read' : text}
      </SectionLabel>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with a link',
    ({ text, script, dir, service }) => (
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
        {service === 'news' ? 'Most Read' : text}
      </SectionLabel>
    ),
    { notes, knobs: { escapeHTML: false } },
  );
