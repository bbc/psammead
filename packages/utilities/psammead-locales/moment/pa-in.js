var moment = require('moment');
require('moment/locale/pa-in');

moment.updateLocale('pa-in', {
  months: ''.split('_'),
  postformat: null,
  relativeTime: {
    past: '%s ਪਹਿਲਾਂ',
  },
});
