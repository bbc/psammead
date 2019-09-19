var moment = require('moment');
var jalaaliHelper = require('./helpers/jalaali');
var stringHelper = require('./helpers/stringHelper');
require('moment/locale/fa');

moment.updateLocale('fa', {
  postformat: function(string) {
    var str = jalaaliHelper.addJalaliDate('fa', string);
    return stringHelper.useEasternNumerals(str);
  },
});
