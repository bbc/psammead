const jalaali = require('jalaali-js');

const jalaaliMonths = {
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

function getJalaaliCalendar(gregorianMoment) {
  if (!gregorianMoment.isValid()) {
    return null;
  }
  const jalaaliDate = jalaali.toJalaali(
    gregorianMoment.year(),
    gregorianMoment.month() + 1,
    gregorianMoment.date(),
  );
  const localeJalaaliMonths = jalaaliMonths[gregorianMoment.locale()];
  const jalaaliMonth = localeJalaaliMonths[jalaaliDate.jm - 1];
  const output = `${jalaaliDate.jd} ${jalaaliMonth} ${jalaaliDate.jy}`;
  return output;
}
exports.getJalaaliCalendar = getJalaaliCalendar;
