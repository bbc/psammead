const moment = require('moment');
require('moment/locale/ar');

// these keys have been overridden to maintain western numerals
// some other keys have been left as set upstream
// see https://github.com/moment/moment/blob/develop/src/locale/ar.js

const dualMonthNames = [
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

moment.updateLocale('ar', {
  months: dualMonthNames,
  monthsShort: dualMonthNames,
  postformat(string) {
    return string.replace(/,/g, '،');
  },
});
