const moment = require('moment');
require('moment/locale/uk');

moment.updateLocale('uk', {
  longDateFormat: {
    LL: 'D MMMM YYYY р',
    LLL: 'D MMMM YYYY р, HH:mm',
    LLLL: 'dddd, D MMMM YYYY р, HH:mm',
  },
});
