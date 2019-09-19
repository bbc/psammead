var moment = require('moment');
var jalaaliHelper = require('./helpers/jalaali');
var stringHelper = require('./helpers/stringHelper');
require('moment/locale/fa');

// Moment formats that should have the Jalali date added
// Change 'BST' to 'GMT' when https://github.com/bbc/simorgh/pull/3847 is merged
var jalaliFormats = ['D MMMM YYYY', 'LL', 'D MMMM YYYY, HH:mm [BST]'];

moment.updateLocale('fa', {
  postformat: function(string) {
    var str = jalaaliHelper.addJalaliDate('fa', jalaliFormats, string);
    return stringHelper.useEasternNumerals(str);
  },
});
