import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import InlineLink from '@bbc/psammead-inline-link';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

import Caption from '.';

storiesOf('Components/Caption', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, script, service }) => (
      <Caption script={script} service={service}>
        {text}
      </Caption>
    ),
    { knobs: { escapeHTML: false } },
  )
  .add(
    'with offscreen text',
    ({ text, script, service }) => (
      <Caption script={script} service={service}>
        <VisuallyHiddenText>
          {service === 'news' ? 'visually hidden text' : text}
        </VisuallyHiddenText>
        {service === 'news' ? 'caption' : text}
      </Caption>
    ),
    { knobs: { escapeHTML: false } },
  )
  .add(
    'containing an inline link',
    ({ text, script, service }) => (
      <Caption script={script} service={service}>
        {`${service === 'news' ? 'caption' : text} `}
        <InlineLink href="https://www.bbc.com">
          {service === 'news' ? 'inline link' : text}
        </InlineLink>
        {` ${service === 'news' ? 'caption' : text} `}
      </Caption>
    ),
    { knobs: { escapeHTML: false } },
  );

storiesOf('Components/Caption', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'containing italicisation',
    ({ script, service }) => (
      <Caption script={script} service={service}>
        Example text with <i>italics</i>
      </Caption>
    ),
    { knobs: { escapeHTML: false } },
  )
  .add(
    'containing multiple paragraphs',
    ({ script, service }) => (
      <Caption script={script} service={service}>
        <p>Paragraph with padding bottom.</p>
        <p>
          Last paragraph - <i>without padding bottom</i>.
        </p>
      </Caption>
    ),
    { knobs: { escapeHTML: false } },
  );
