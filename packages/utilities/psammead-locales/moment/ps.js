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
  // Gregorian Months
  months: pashtoGregorianMonths,
  monthsShort: pashtoGregorianMonths,
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
