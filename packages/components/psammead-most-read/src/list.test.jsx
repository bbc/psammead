import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { latin, arabic } from '@bbc/gel-foundations/scripts';
import MostReadList from './list';

const itemsLTR = [
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: 'John Lewis staff bonus cut again as profits fall',
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
];

const itemsRTL = [
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
  {
    title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
    href: 'https://www.bbc.com/vietnamese/institutional-49283563',
  },
];

describe('MostReadList', () => {
  shouldMatchSnapshot(
    'should render with ltr items with correct dir',
    <MostReadList items={itemsLTR} service="news" script={latin} dir="ltr" />,
  );
  shouldMatchSnapshot(
    'should render with rtl arabic items with correct dir',
    <MostReadList
      items={itemsRTL}
      service="arabic"
      script={arabic}
      dir="ltr"
    />,
  );
});
