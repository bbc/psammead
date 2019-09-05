/* eslint-disable */
const moment = require('moment');

moment.updateLocale('pa-in', {
  postformat: function (string) {
    return string;
  }
});
