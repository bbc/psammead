/* eslint-disable func-names */
const moment = require('moment');
require('moment/locale/ar');

// these keys have been overridden to maintain western numerals
// some other keys have been left as set upstream
// see https://github.com/moment/moment/blob/develop/src/locale/ar.js

const months = [
  'يناير/ كانون الثاني',
  'فبراير/ شباط',
  'مارس/ آذار',
  'أبريل/ نيسان',
  'مايو/ أيار',
  'يونيو/ حزيران',
  'يوليو/ تموز',
  'أغسطس/ آب',
  'سبتمبر/ أيلول',
  'أكتوبر/ تشرين الأول',
  'نوفمبر/ تشرين الثاني',
  'ديسمبر/ كانون الأول',
];
const symbolMap = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '0': '0',
};
const numberMap = {
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '0': '0',
};

moment.updateLocale('ar', {
  months,
  monthsShort: months,
  preparse(string) {
    return string
      .replace(/[1234567890]/g, function(match) {
        return numberMap[match];
      })
      .replace(/،/g, ',');
  },
  postformat(string) {
    return string
      .replace(/\d/g, function(match) {
        return symbolMap[match];
      })
      .replace(/,/g, '،');
  },
});
