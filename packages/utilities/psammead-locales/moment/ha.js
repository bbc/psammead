var moment = require('moment');

var months = [
  'Janairu',
  'Fabrairu',
  'Maris',
  'Aprilu',
  'Mayu',
  'Yuni',
  'Yuli',
  'Agusta',
  'Satumba',
  'Oktoba',
  'Nuwamba',
  'Disamba',
];

moment.defineLocale('ha', {
  months: months,
  longDateFormat: { LL: 'D MMMM YYYY' },
  relativeTime: {
    past: '%s wuce',
    m: 'Minti 1 da ta',
    mm: 'Mintuna %d da suka',
    h: "Sa'a 1 da ta",
    hh: "Sa'o'i %d da suka",
  },
});
