var moment = require('moment');
var jalali = require('jalaali-js');
var stringHelper = require('./stringHelper');

var jalaliMonths = {
  fa: [
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
  ],
  ps: [
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
  ],
};

function getJalaaliDatetime(gregorianMoment, localeJalaliMonths) {
  var jalaliDate = jalali.toJalaali(
    gregorianMoment.year(),
    gregorianMoment.month() + 1,
    gregorianMoment.date()
  );
  var output =
    // eslint-disable-next-line prefer-template
    jalaliDate.jd +
    ' ' +
    localeJalaliMonths[jalaliDate.jm - 1] +
    ' ' +
    jalaliDate.jy;
  return output;
}

function addJalaliDate(locale, gregorianString) {
  var localeJalaliMonths = jalaliMonths[locale];
  // Moment formats that should have the Jalali date added
  // Change 'BST' to 'GMT' when https://github.com/bbc/simorgh/pull/3847 is merged
  var jalaliFormats = ['D MMMM YYYY', 'LL', 'D MMMM YYYY, HH:mm [BST]'];
  var gregorianMoment = moment(gregorianString, jalaliFormats, locale, true);
  var gregorianMonth = moment.months(gregorianMoment.month());
  // The gregorianMoment month must match up with the months within the current moments locale
  // Jalali calendar to be applied to -
  if (stringHelper.arrayContains(moment.months(), gregorianMonth)) {
    // eslint-disable-next-line prefer-template
    return (
      // eslint-disable-next-line prefer-template
      stringHelper.useEasternNumerals(
        getJalaaliDatetime(gregorianMoment, localeJalaliMonths)
      ) +
      ' - ' +
      stringHelper.useEasternNumerals(gregorianString)
    );
  }
  return gregorianString;
}

exports.addJalaliDate = addJalaliDate;
exports.getJalaaliDatetime = getJalaaliDatetime;
