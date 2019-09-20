var moment = require('moment');

var months = [
  'Ukwa mbere',
  'Ukwa kabiri',
  'Ukwa gatatu',
  'Ukwa kane',
  'Ukwa gatanu',
  'Ukwa gatandatu',
  "Ukw'indwi",
  "Ukw'umunani",
  "Ukw'icenda",
  "Ukw'icumi",
  "Ukw'icumi na rimwe",
  "Ukw'icumi na kabiri",
];

moment.defineLocale('rw', {
  months: months,
  longDateFormat: { LL: 'D MMMM YYYY' },
  relativeTime: {
    past: '%s',
    m: 'Haciye umunota 1',
    mm: 'Iminota %d iraheze',
    h: 'Haciye isaha 1',
    hh: 'Haciye amasaha %d',
  },
});
