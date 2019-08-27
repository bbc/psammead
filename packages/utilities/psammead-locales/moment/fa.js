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

const persianMonths = [
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

const jalaliFormats = [
  'HH:mm', // LT FORMAT
  'HH:mm:ss', // LTS FORMAT
  'DD/MM/YYYY', // L FROMAT
  'D MMMM YYYY', // LL FROMAT
  'D MMMM YYYY HH:mm', // LLL FROMAT
  'dddd, D MMMM YYYY HH:mm', // LLLL FROMAT
];

moment().locale('fa');
moment.updateLocale('fa', {
  postformat(string) {
    const str = jalaaliHelper.addJalaliDate(
      'fa',
      persianMonths,
      jalaliFormats,
      string,
    );
    if (!str.includes('datetime =')) {
      return str
        .replace(/\d/g, function(match) {
          return symbolMap[match];
        })
        .replace(/,/g, '،');
    }
    return str;
  },
});
