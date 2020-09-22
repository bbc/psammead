import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';

import SitewideLinks from './index';

const buildLink = text => ({
  text,
  href: 'https://www.bbc.co.uk/news',
});

const links = (text, service) =>
  Array(7)
    .fill()
    .map((el, n) => (service === 'news' ? `link ${n}` : `${text} ${n}`))
    .map(buildLink);

storiesOf('Components/SitewideLinks', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    ({ text, service }) => (
      <SitewideLinks
        links={links(text, service)}
        copyrightText={service === 'news' ? 'copyright text' : text}
        externalLink={buildLink(service === 'news' ? 'external link' : text)}
        service={service}
      />
    ),
    { knobs: { escapeHTML: false } },
  )
  .add(
    'with Trust Project Link',
    ({ text, service }) => (
      <SitewideLinks
        links={links(text, service)}
        trustProjectLink={{
          href: 'https://www.bbc.co.uk/news',
          text: 'Why you can trust the bbc',
        }}
        copyrightText={service === 'news' ? 'copyright text' : text}
        externalLink={buildLink(service === 'news' ? 'external link' : text)}
        service={service}
      />
    ),
    { knobs: { escapeHTML: false } },
  );
