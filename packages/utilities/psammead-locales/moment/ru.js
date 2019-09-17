var moment = require('moment');
require('moment/locale/ru');

moment.updateLocale('ru', {
  longDateFormat: {
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY, H:mm',
    LLLL: 'dddd, D MMMM YYYY, H:mm',
  },
});
