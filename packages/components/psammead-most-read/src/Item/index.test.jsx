import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { MostReadLink } from '.';
import { getItem, getItemWrapperArray } from '../testHelpers/itemsHelper';

describe('MostReadLink', () => {
  shouldMatchSnapshot(
    'should render ltr correctly',
    <MostReadLink
      dir="ltr"
      href={getItem('news').href}
      service="news"
      script={latin}
      title={getItem('news').title}
    />,
  );

  shouldMatchSnapshot(
    'should render rtl correctly',
    <MostReadLink
      dir="rtl"
      href={getItem('persian').href}
      service="persian"
      script={arabic}
      title={getItem('persian').title}
    />,
  );

  shouldMatchSnapshot(
    'should render with last updated date correctly',
    <MostReadLink
      dir="ltr"
      href={getItem('news').href}
      service="news"
      script={latin}
      title={getItem('news').title}
    >
      {getItem('news', true).timestamp}
    </MostReadLink>,
  );
});

describe('MostReadItemWrapper', () => {
  shouldMatchSnapshot(
    'should render ltr correctly with 10 items',
    getItemWrapperArray({
      numberOfItems: 10,
      service: 'news',
      script: latin,
      dir: 'ltr',
    }).map(item => item),
  );

  shouldMatchSnapshot(
    'should render rtl correctly with 10 items',
    getItemWrapperArray({
      numberOfItems: 10,
      service: 'persian',
      script: arabic,
      dir: 'rtl',
    }).map(item => item),
  );
});
