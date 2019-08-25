/* eslint-disable func-names */
const moment = require('moment');
const jalaaliHelper = require('./helpers/jalaali');

const symbolMap = {
  '1': '۱',
  '2': '۲',
  '3': '۳',
  '4': '٤',
  '5': '۵',
  '6': '۶',
  '7': '۷',
  '8': '۸',
  '9': '۹',
  '0': '۰',
};

const numberMap = {
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '٤': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',
  '۰': '0',
};

// pashto calendar months
const pashtoMonths = [
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

const jalaliFromats = [
  'HH:mm', // LT
  'HH:mm:ss', // LTS
  'D MMMM YYYY', // LL FROMAT
  'D MMMM YYYY HH:mm', // LLL FROMAT
  'dddd, D MMMM YYYY HH:mm', // LLLL FROMAT
];
moment.defineLocale('ps', {
  months: 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split(
    '_',
  ),
  monthsShort: 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split(
    '_',
  ),
  weekdays: 'اتوار_ ګول_نهه_شورو_زیارت_جمعه_خالي'.split('_'),
  weekdaysShort: 'اتوار_ ګول_نهه_شورو_زیارت_جمعه_خالي '.split('_'),
  weekdaysMin: 'ا_ګ_ن_ش_ز_ج_خ'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  meridiemParse: /د غرمې دمخه|ماسپښین/,
  isPM(input) {
    return /ماسپښین/.test(input);
  },
  meridiem(hour) {
    if (hour < 12) {
      return 'د غرمې دمخه';
    }
    return 'ماسپښین';
  },
  calendar: {
    sameDay: '[نن ورځ] LT',
    nextDay: '[سبا] LT',
    nextWeek: 'dddd [بله اونۍ] LT',
    lastDay: '[پرون] LT',
    lastWeek: '[تیره اونۍ]dddd LT',
    sameElse: 'L',
  },
  relativeTime: {
    future: 'وروسته %s',
    past: '%s مخکې',
    s: 'څو ثاني',
    m: 'يوه دقيقه',
    mm: '%d دقیقه',
    h: 'یو ساعت',
    hh: '%d ساعت',
    d: 'یوه ورځ',
    dd: '%d ورځ',
    M: 'يوه مياشت',
    MM: '%d مياشت',
    y: 'یو کال',
    yy: '%d کال',
  },
  preparse(string) {
    return string
      .replace(/[۰-۹]/g, function(match) {
        return numberMap[match];
      })
      .replace(/،/g, ',');
  },
  postformat(string) {
    const str = jalaaliHelper.addJalaliDate(
      'ps',
      pashtoMonths,
      jalaliFromats,
      string,
    );

    return str
      .replace(/\d/g, function(match) {
        return symbolMap[match];
      })
      .replace(/,/g, '،');
  },
  dayOfMonthOrdinalParse: /\d{1,2}\./,
  ordinal: '%d',
  week: {
    dow: 6, // Saturday is the first day of the week.
    doy: 12, // The week that contains Jan 1st is the first week of the year.
  },
});
