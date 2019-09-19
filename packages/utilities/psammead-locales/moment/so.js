var moment = require('moment');

moment.defineLocale('so', {
  months: 'Jannaayo_Febraayo_Maarso_Abriil_Maajo_Juunyo_Luulyo_Agoosto_Sebtembar_Oktoobar_Nofembar_Disembar'.split(
    '_'
  ),
  relativeTime: {
    past: '%s ka hor',
    m: 'Daqiiqad',
    mm: '%d Daqiiqadood',
    h: 'Saacad',
    hh: '%d Saacadood',
  },
  longDateFormat: { LL: 'D MMMM YYYY' },
});
