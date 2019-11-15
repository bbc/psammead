import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Timestamp from '@bbc/psammead-timestamp';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { MostReadLink, MostReadRank } from './item';

const ltrLink = {
  title: 'John Lewis staff bonus cut again as profits fall',
  href: 'https://www.bbc.com/vietnamese/institutional-49283563',
};
const rtlLink = {
  title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
  href: 'https://www.bbc.com/vietnamese/institutional-49283563',
};

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
    <MostReadLink service="news" script={latin} dir="ltr" link={ltrLink} />,
  );

  shouldMatchSnapshot(
    'should render rtl correctly',
    <MostReadLink service="persian" script={arabic} dir="rtl" link={rtlLink} />,
  );

  shouldMatchSnapshot(
    'should render with last updated date correctly',
    <MostReadLink
      service="news"
      script={latin}
      dir="ltr"
      link={ltrLink}
      lastUpdated={lastUpdated(latin, 'news')}
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
