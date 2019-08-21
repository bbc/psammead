const moment = require('moment-timezone/moment-timezone');
const jalali = require('jalaali-js');

function getJalaliString(gregorianMoment, jalaliMonths) {
  const jalaliDate = jalali.toJalaali(
    gregorianMoment.year(),
    gregorianMoment.month() + 1,
    gregorianMoment.date(),
  );
  const output = `${jalaliDate.jd} ${jalaliMonths[jalaliDate.jm - 1]} ${
    jalaliDate.jy
  }`;
  return output;
}

function addJalaliDate(locale, jalaliMonths, jalaliFormats, gregorianString) {
  const gregorianMoment = moment(gregorianString, jalaliFormats, locale, true);

  // gregorianString must be in one of jalaliFormats, and return an isValid moment for
  // Jalali calendar to be applied to - e.g this will exclude timeago timestamps
  if (gregorianMoment.isValid() && jalaliMonths.length === 12) {
    return `${gregorianString} - ${getJalaliString(
      gregorianMoment,
      jalaliMonths,
    )}`;
  }
  return gregorianString;
}

exports.addJalaliDate = addJalaliDate;
