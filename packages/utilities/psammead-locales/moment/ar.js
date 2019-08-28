const moment = require('moment');
require('moment/locale/ar');

// the months have been overridden to maintain arabic dual month names
// other values in this locale have been left as set upstream
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
