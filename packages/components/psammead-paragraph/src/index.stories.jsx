/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import InlineLink from '@bbc/psammead-inline-link';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import { create } from '@storybook/theming';
import notes from '../README.md';
import Paragraph from './index';

const theme = create({
  base: 'dark',
  brandTitle: 'BBC Psammead',
  brandUrl: 'https://github.com/bbc/psammead',
  brandImage:
    'https://user-images.githubusercontent.com/11341355/54079666-af202780-42d8-11e9-9108-e47ea27fddc5.png',
});

storiesOf('Components|Paragraph', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, script, service }) => (
      <Paragraph script={script} service={service}>
        {text}
      </Paragraph>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'dark mode',
    ({ text, script, service }) => (
      <Paragraph script={script} service={service} darkMode>
        {text}
      </Paragraph>
    ),
    { notes, knobs: { escapeHTML: false }, options: { theme } },
  )
  .add(
    'containing an inline link',
    ({ text, script, service }) => (
      <Paragraph script={script} service={service}>
        {`${text} `}
        <InlineLink href="https://www.bbc.com">{text}</InlineLink>
        {` ${text}`}
      </Paragraph>
    ),

    { notes, knobs: { escapeHTML: false } },
  );
