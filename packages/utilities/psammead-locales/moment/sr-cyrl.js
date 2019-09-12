const moment = require('moment');
require('moment/locale/sr-cyrl');

moment.updateLocale('sr', {
  longDateFormat: {
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY H:mm',
    LLLL: 'dddd, D MMMM YYYY H:mm',
  },
});
