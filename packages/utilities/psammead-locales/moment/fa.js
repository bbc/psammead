/* eslint-disable func-names */
const moment = require('moment');
const jalaaliHelper = require('./helpers/jalaali');
const stringHelper = require('./helpers/stringHelper');

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
      return stringHelper.useEasternNumerals(str);
    }
    return str;
  },
});
