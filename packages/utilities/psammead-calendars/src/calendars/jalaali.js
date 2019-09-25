const jalaaliJs = require('jalaali-js');

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

const jalaali = {
  formatDate: gregorianMoment => {
    if (typeof gregorianMoment.locale !== 'function') {
      return null;
    }
    const currentLocale = gregorianMoment.locale();
    // Check if moment is valid and locale passed in is valid
    if (!gregorianMoment.isValid() || !(`${currentLocale}` in jalaaliMonths)) {
      return null;
    }
    const jalaaliDate = jalaaliJs.toJalaali(
      gregorianMoment.year(),
      gregorianMoment.month() + 1,
      gregorianMoment.date(),
    );
    const localeJalaaliMonths = jalaaliMonths[gregorianMoment.locale()];
    const jalaaliMonth = localeJalaaliMonths[jalaaliDate.jm - 1];
    const output = `${jalaaliDate.jd} ${jalaaliMonth} ${jalaaliDate.jy}`;
    return output;
  },
};

export default jalaali;
