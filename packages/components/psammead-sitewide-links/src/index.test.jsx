import React from 'react';
import SitewideLinks from './index';
import { ServiceContextProvider } from '../../contexts/ServiceContext';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';

describe(`SitewideLinks`, () => {
  const link = {
    href: 'https://www.bbc.co.uk/news',
    text: 'Link',
  };

  const links = [link];

  shouldMatchSnapshot(
    'should render correctly',
    <ServiceContextProvider>
      <SitewideLinks
        links={links}
        copyrightText="Text here. "
        externalLink={link}
      />
    </ServiceContextProvider>,
  );
});
