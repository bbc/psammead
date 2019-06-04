import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import List from './index';

describe(`List`, () => {
  const link = {
    href: 'https://www.bbc.co.uk/news',
    text: 'Link',
  };

  const getLinks = count => new Array(count).fill(link);

  shouldMatchSnapshot(
    'should render correctly with 7 items',
    <List links={getLinks(7)} />,
  );

  shouldMatchSnapshot(
    'should render correctly with 8 items',
    <List links={getLinks(8)} />,
  );
});
