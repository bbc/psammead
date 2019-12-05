const ltrLink = {
  service: 'news',
  title: 'John Lewis staff bonus cut again as profits fall',
  href: 'https://www.bbc.co.uk/news/business-43328806',
};

const rtlLink = {
  service: 'persian',
  title: "ایران از لغو 'رزمایش قطع اینترنت' خبر داد",
  href: 'https://www.bbc.com/persian/iran-46965704',
};

const loadItems = (number, type) =>
  Array(number).fill(type === 'LTR' ? ltrLink : rtlLink);

export default loadItems;
