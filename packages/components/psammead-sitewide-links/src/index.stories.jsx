import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SitewideLinks from './index';

const buildLink = text => ({
  href: 'https://www.bbc.co.uk/news',
  text,
});

const linkNames = [1, 2, 3, 4, 5, 6, 7].map(n => `link ${n}`);
linkNames.unshift('external link', 'copyright text');

storiesOf('SitewideLinks', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider(
      linkNames,
      (externalLinkText, copyrightText, ...linkTexts) => {
        const links = linkTexts.map(buildLink);
        return (
          <SitewideLinks
            links={links}
            copyrightText={copyrightText}
            externalLink={buildLink(externalLinkText)}
          />
        );
      },
    ),
    { notes, knobs: { escapeHTML: false } },
  );
