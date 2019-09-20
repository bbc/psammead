var moment = require('moment');
require('moment/locale/sr-cyrl');

moment.updateLocale('sr-cyrl', {
  longDateFormat: {
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY H:mm',
    LLLL: 'dddd, D MMMM YYYY H:mm',
  },
  relativeTime: {
    past: 'Пре  %s',
    m: '1 минута',
    mm: 'минута: %d',
    h: '1 сата',
    hh: 'сати: %d',
  },
});
