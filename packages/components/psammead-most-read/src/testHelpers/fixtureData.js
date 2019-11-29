const LTRLink = {
  service: 'news',
  title: 'John Lewis staff bonus cut again as profits fall',
  href: 'https://www.bbc.co.uk/news/business-43328806',
};

const RTLLink = {
  service: 'persian',
  title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
  href: 'https://www.bbc.com/persian/iran-46965704',
};

export const items = Array(10).fill(LTRLink);

export const itemsRTL = Array(10).fill(RTLLink);
