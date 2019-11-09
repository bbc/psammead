/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import InlineLink from '@bbc/psammead-inline-link';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Synopsis from './index';

storiesOf('Components|Synopsis', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, script, service }) => (
      <Synopsis script={script} service={service}>
        {text}
      </Synopsis>
    ),
    { notes, knobs: { escapeHTML: false } },
  )
  .add(
    'containing an inline link',
    ({ text, script, service }) => (
      <Synopsis script={script} service={service}>
        {`${text} `}
        <InlineLink href="https://www.bbc.com">{text}</InlineLink>
        {` ${text}`}
      </Synopsis>
    ),

    { notes, knobs: { escapeHTML: false } },
  );
