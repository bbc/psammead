var moment = require('moment');

var months = [
  'Jannaayo',
  'Febraayo',
  'Maarso',
  'Abriil',
  'Maajo',
  'Juunyo',
  'Luulyo',
  'Agoosto',
  'Sebtembar',
  'Oktoobar',
  'Nofembar',
  'Disembar',
];
moment.defineLocale('so', {
  months: months,
  longDateFormat: { LL: 'D MMMM YYYY' },
  relativeTime: {
    past: '%s ka hor',
    m: 'Daqiiqad',
    mm: '%d Daqiiqadood',
    h: 'Saacad',
    hh: '%d Saacadood',
  },
});
