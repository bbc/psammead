import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SectionLabel from './index';

storiesOf('Components|SectionLabel', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider({
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
          sectionName="top-stories"
        >
          {title}
        </SectionLabel>
      ),
    }),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'with a link',
    inputProvider({
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
    }),
    { notes, knobs: { escapeHTML: false } },
  );
