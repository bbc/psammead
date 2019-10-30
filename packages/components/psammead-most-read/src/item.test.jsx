import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import MostReadItem from './item';

const ltrItem = {
  header: 'John Lewis staff bonus cut again as profits fall',
  href: 'https://www.bbc.com/vietnamese/institutional-49283563',
};
const rtlItem = {
  header: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
  href: 'https://www.bbc.com/vietnamese/institutional-49283563',
};

describe('Most read', () => {
  shouldMatchSnapshot(
    'should render ltr correctly',
    <MostReadItem
      service="news"
      script={latin}
      count="1"
      dir="ltr"
      item={ltrItem}
    />,
  );

  shouldMatchSnapshot(
    'should render rtl correctly',
    <MostReadItem
      service="persian"
      script={arabic}
      count="1"
      dir="rtl"
      item={rtlItem}
    />,
  );
});
