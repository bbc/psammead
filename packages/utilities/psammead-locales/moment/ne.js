var moment = require('moment');
require('moment/locale/ne');

moment.updateLocale('ne', {
  postformat: null,
  relativeTime: {
    past: '%s पहिले',
    m: '१ मिनेट',
    mm: '%d मिनेट',
    h: '१ घण्टा',
    hh: '{x} घण्टा',
  },
});
