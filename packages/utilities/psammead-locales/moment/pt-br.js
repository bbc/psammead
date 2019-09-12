const moment = require('moment');
require('moment/locale/pt-br');

moment.updateLocale('pt-br', {
  longDateFormat: {
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY [às] HH:mm',
    LLLL: 'dddd, D MMMM YYYY [às] HH:mm',
  },
});
