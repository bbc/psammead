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
  monthsShort: pashtoGregorianMonths,
  relativeTime: {
    past: '%s مخکې', // %s 'ago'
    s: 'یو څو ثانیې', // 'a few seconds'
    m: 'یوه دقیقه', // 'a minute'
    mm: '%d دقیقې', // %d 'minutes'
    h: 'یو ساعت', // 'an hour'
    hh: '%d ساعتونه', // %d 'hours'
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
