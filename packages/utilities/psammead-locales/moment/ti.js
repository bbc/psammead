var moment = require('moment');

var months = [
  'ጥሪ',
  'ለካቲት',
  'መጋቢት',
  'ሚያዝያ',
  'ጉንቦት',
  'ሰነ',
  'ሓምለ',
  'ነሓሰ',
  'መስከረም',
  'ጥቅምቲ',
  'ሕዳር',
  'ታሕሳስ',
];

moment.defineLocale('ti', {
  months: months,
  longDateFormat: { LL: 'D MMMM YYYY' },
  relativeTime: {
    past: 'ቅድሚ %s',
    m: 'ደቒቕ',
    mm: '%d ደቓይቕ',
    h: 'ሓደ ሰዓት',
    hh: '%d ሰዓታት',
  },
});
