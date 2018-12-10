import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import List from './index';

describe(`List`, () => {
  const link = {
    href: 'https://www.bbc.co.uk/news',
    text: 'Link',
  };

  const links = [link];

  shouldMatchSnapshot('should render correctly', <List links={links} />);
});
