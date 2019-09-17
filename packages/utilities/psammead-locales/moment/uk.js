var moment = require('moment');
require('moment/locale/uk');

moment.updateLocale('uk', {
  longDateFormat: {
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, HH:mm',
    LLLL: 'dddd, D MMMM YYYY, HH:mm',
  },
});
