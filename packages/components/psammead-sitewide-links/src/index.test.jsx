import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import SitewideLinks from './index';

describe(`SitewideLinks`, () => {
  const link = {
    href: 'https://www.bbc.co.uk/news',
    text: 'Link',
  };
  const ccpaLink = {
    href:
      'https://www.bbc.com/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
    text: 'AdChoices / Do Not Sell My Info',
    lang: 'en-GB',
  };

  const links = new Array(7).fill(link).map((linkItem, index) => ({
    ...linkItem,
    text: `${linkItem.text}${index}`,
  }));

  const ccpaLinks = new Array(8).fill(link, 0, 7).map((linkItem, index) => ({
    ...linkItem,
    text: `${linkItem.text}${index}`,
  }));

  ccpaLinks[7] = ccpaLink;

  shouldMatchSnapshot(
    'should render correctly',
    <SitewideLinks
      links={links}
      copyrightText={<span>Text here.</span>}
      externalLink={link}
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render correctly with CCPA link',
    <SitewideLinks
      links={ccpaLinks}
      copyrightText={<span>Text here.</span>}
      externalLink={link}
      service="news"
    />,
  );

  shouldMatchSnapshot(
    'should render correctly with trust project link',
    <SitewideLinks
      links={links}
      trustProjectLink={{
        href: 'http://www.bbc.com/terms',
        text: 'Why you can trust the bbc',
      }}
      copyrightText={<span>Text here.</span>}
      externalLink={link}
      service="news"
    />,
  );
});
