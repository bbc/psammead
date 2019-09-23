var moment = require('moment');
require('moment/locale/es');

moment.updateLocale('es', {
  relativeTime: {
    past: '%s',
    m: '1 minuto',
    mm: '%d minutos',
    h: '1 hora',
    hh: '%d horas',
  },
});
