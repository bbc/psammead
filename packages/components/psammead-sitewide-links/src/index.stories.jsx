import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import SitewideLinks from './index';

const buildLink = (text, index) => {
  const linkText = index >= 0 ? `${text} ${index}` : text;
  return {
    href: 'https://www.bbc.co.uk/news',
    text: linkText,
  };
};

const linkNames = [1, 2, 3, 4, 5, 6, 7].map(n => ({
  name: `Link ${n}`,
  defaultText: 'link',
}));
linkNames.unshift(
  { name: 'External Link', defaultText: 'external link' },
  { name: 'Copyright', defaultText: 'copyright text' },
);

export default {
  title: 'Components|SitewideLinks',
  decorators: [withKnobs],
};

export const defaultStory = inputProvider({
  slots: linkNames,
  /* eslint-disable react/prop-types */
  componentFunction: ({
    slotTexts: [externalLinkText, copyrightText, ...linkTexts],
    service,
  }) => {
    const links = linkTexts.map(buildLink);
    return (
      <SitewideLinks
        links={links}
        copyrightText={copyrightText}
        externalLink={buildLink(externalLinkText)}
        service={service}
      />
    );
  },
});

defaultStory.story = {
  name: 'default',
  parameters: { notes, knobs: { escapeHTML: false } },
};
