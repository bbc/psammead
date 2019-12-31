import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Timestamp from '@bbc/psammead-timestamp';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { MostReadLink, MostReadRank } from '.';
import { getItem, getItems } from '../testHelpers/itemsHelper';

const lastUpdated = (script, service) => (
  <Timestamp
    datetime="2019-03-01T14:00+00:00"
    script={script}
    padding={false}
    service={service}
  >
    Last updated: 5th November 2016
  </Timestamp>
);

describe('MostReadLink', () => {
  shouldMatchSnapshot(
    'should render ltr correctly',
    <MostReadLink
      link={getItem('news')}
      service="news"
      script={latin}
      dir="ltr"
      items={getItems('news', 2)}
    />,
  );

  shouldMatchSnapshot(
    'should render rtl correctly',
    <MostReadLink
      link={getItem('arabic')}
      service="arabic"
      script={arabic}
      dir="rtl"
      items={getItems('news', 2)}
    />,
  );

  shouldMatchSnapshot(
    'should render with last updated date correctly',
    <MostReadLink
      link={getItem('news')}
      lastUpdated={lastUpdated(latin, 'news')}
      service="news"
      script={latin}
      dir="ltr"
      items={getItems('news', 2)}
    />,
  );
});

describe('MostReadRank', () => {
  shouldMatchSnapshot(
    'should render ltr correctly',
    <MostReadRank service="news" script={latin}>
      5
    </MostReadRank>,
  );

  shouldMatchSnapshot(
    'should render ltr with double digits correctly',
    <MostReadRank service="news" script={latin}>
      10
    </MostReadRank>,
  );

  shouldMatchSnapshot(
    'should render rtl correctly',
    <MostReadRank service="persian" script={arabic}>
      ۲
    </MostReadRank>,
  );
});
