import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SitewideLinks from './index';

const buildLink = text => ({
  text,
  href: 'https://www.bbc.co.uk/news',
});

const links = Array(7)
  .fill()
  .map((el, n) => `link ${n}`)
  .map(buildLink);

storiesOf('Components|SitewideLinks', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, service }) => (
      <SitewideLinks
        links={links}
        copyrightText={service === 'news' ? 'copyright text' : text}
        externalLink={buildLink(service === 'news' ? 'external link' : text)}
        service={service}
      />
    ),
    { notes, knobs: { escapeHTML: false } },
  );
