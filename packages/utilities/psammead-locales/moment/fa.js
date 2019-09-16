var moment = require('moment');
var jalaaliHelper = require('./helpers/jalaali');
var stringHelper = require('./helpers/stringHelper');
require('moment/locale/fa');

var persianJalaliMonths = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];

// Moment formats that should have the Jalali date added
var jalaliFormats = ['D MMMM YYYY', 'LL', 'D HH:mm [,]YYYY MMMM [BST]'];

moment.updateLocale('fa', {
  postformat: function(string) {
    var str = jalaaliHelper.addJalaliDate(
      'fa',
      persianJalaliMonths,
      jalaliFormats,
      string
    );

    return stringHelper.useEasternNumerals(str);
  },
});
