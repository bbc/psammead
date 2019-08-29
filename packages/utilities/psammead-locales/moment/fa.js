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
  'D MMMM YYYY',
  'D MMMM YYYY HH:mm',
  'dddd, D MMMM YYYY HH:mm',
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

    return stringHelper.useEasternNumerals(str);
  },
});
