var moment = require('moment');
var jalaaliHelper = require('./helpers/jalaali');
var stringHelper = require('./helpers/stringHelper');

var pashtoJalaliMonths = [
  'وری',
  'غویی',
  'غبرګولی',
  'چنګاښ',
  'زمری',
  'وږی',
  'تله',
  'لړم',
  'لیندۍ',
  'مرغومی',
  'سلواغه',
  'کب',
];

// eslint-disable-next-line prettier/prettier
var pashtoGregorianMonths = 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split('_');

// Moment formats that should have the Jalali date added
var jalaliFormats = ['D MMMM YYYY', 'LL'];

moment.defineLocale('ps', {
  months: pashtoGregorianMonths,
  // To do: `monthsShort` is using full months - should they be short?
  monthsShort: pashtoGregorianMonths,

  weekdays: 'اتور_ګول_نهه_شرور_زیارت_جمعه_خالی'.split('_'),

  // To do: Pashto short weekday translation.
  weekdaysShort: 'اتور_ګول_نهه_شرور_زیارت_جمعه_خالی'.split('_'),

  // To do: Verify translation.
  relativeTime: {
    future: 'په %s', // 'in' %s
    past: '%s مخکې', // %s 'ago'
    s: 'یو څو ثانیې', // 'a few seconds'
    ss: '%d ثانیې', // %d 'seconds'
    m: 'یوه دقیقه', // 'a minute'
    mm: '%d دقیقې', // %d 'minutes'
    h: 'یو ساعت', // 'an hour'
    hh: '%d ساعتونه', // %d 'hours'
    d: 'یوه ورځ', // 'a day ago'
    dd: '%d ورځې', // %d 'days'
    M: 'یوه میاشت', // 'a month'
    MM: '%d میاشتې', // %d 'months'
    y: 'یو کال', // 'a year'
    yy: '%d کلونه', // %d 'years'
  },

  // To do: Verify translation.
  meridiem: function(hours) {
    return hours < 12 ? 'د غرمې دمخه' : 'ماسپښین'; // AM : PM
  },

  isPM: function(input) {
    return /ماسپښین/.test(input);
  },

  meridiemParse: /د غرمې دمخه|ماسپښین/,

  // To do: Pashto translation.
  // ordinal : function (number, token) {
  //   var b = number % 10;
  //   var output = (~~ (number % 100 / 10) === 1) ? 'th' :
  //       (b === 1) ? 'st' :
  //       (b === 2) ? 'nd' :
  //       (b === 3) ? 'rd' : 'th';
  //   return number + output;
  // },

  // To do: Verify translation.
  calendar: {
    lastDay: '[پرون په] LT', // [Yesterday at]
    sameDay: '[نن ورځ] LT', // [Today at]
    nextDay: '[سبا ته] LT', // [Tomorrow at]
    lastWeek: '[تیره] dddd [په] LT', // [Last] ... [at]
    nextWeek: 'dddd [په] LT', // [at]
    sameElse: 'L',
  },

  postformat: function(string) {
    var str = jalaaliHelper.addJalaliDate(
      'ps',
      pashtoJalaliMonths,
      jalaliFormats,
      string
    );

    return stringHelper.useEasternNumerals(str);
  },
});
