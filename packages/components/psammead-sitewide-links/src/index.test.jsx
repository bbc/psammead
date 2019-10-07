import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import SitewideLinks from './index';

describe(`SitewideLinks`, () => {
  const link = {
    href: 'https://www.bbc.co.uk/news',
    text: 'Link',
  };

  const links = new Array(7).fill(link).map((linkItem, index) => ({
    ...linkItem,
    text: `${linkItem.text}${index}`,
  }));

  shouldMatchSnapshot(
    'should render correctly if no trustProjectLink is passed',
    <SitewideLinks
      links={links}
      copyrightText={<span>Text here.</span>}
      trustProjectLink="null"
      externalLink={link}
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render correctly',
    <SitewideLinks
      links={links}
      copyrightText={<span>Text here.</span>}
      trustProjectLink={link}
      externalLink={link}
      service="news"
    />,
  );
});
