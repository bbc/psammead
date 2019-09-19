var moment = require('moment');
var jalaaliHelper = require('./helpers/jalaali');
var stringHelper = require('./helpers/stringHelper');

// eslint-disable-next-line prettier/prettier
var pashtoGregorianMonths = 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split('_');

moment.defineLocale('ps', {
  // Gregorian Months
  months: pashtoGregorianMonths,
  monthsShort: pashtoGregorianMonths,
  postformat: function(string) {
    var str = jalaaliHelper.addJalaliDate('ps', string);
    return stringHelper.useEasternNumerals(str);
  },
});
