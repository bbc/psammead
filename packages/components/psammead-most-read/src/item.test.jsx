import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Timestamp from '@bbc/psammead-timestamp';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import { MostReadItem, StyledCountSpan } from './item';

const ltrItem = {
  title: 'John Lewis staff bonus cut again as profits fall',
  href: 'https://www.bbc.com/vietnamese/institutional-49283563',
};
const rtlItem = {
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

describe('Most read item', () => {
  shouldMatchSnapshot(
    'should render ltr correctly',
    <MostReadItem service="news" script={latin} dir="ltr" item={ltrItem} />,
  );

  shouldMatchSnapshot(
    'should render rtl correctly',
    <MostReadItem service="persian" script={arabic} dir="rtl" item={rtlItem} />,
  );

  shouldMatchSnapshot(
    'should render last updated date correctly',
    <MostReadItem
      service="news"
      script={latin}
      dir="ltr"
      item={ltrItem}
      lastUpdated={lastUpdated(latin, 'news')}
    />,
  );
});

describe('Most read count', () => {
  shouldMatchSnapshot(
    'should render ltr correctly',
    <StyledCountSpan service="news" script={latin}>
      5
    </StyledCountSpan>,
  );

  shouldMatchSnapshot(
    'should render ltr double digit correctly',
    <StyledCountSpan service="news" script={latin}>
      10
    </StyledCountSpan>,
  );

  shouldMatchSnapshot(
    'should render rtl correctly',
    <StyledCountSpan service="persian" script={arabic}>
      ۲
    </StyledCountSpan>,
  );
});
