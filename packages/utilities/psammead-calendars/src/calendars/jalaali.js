import jalaaliJs from 'jalaali-js';

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

// Helper function to check if argument passed through is a supported moment
const isSupportedMoment = moment => {
  if (
    moment &&
    typeof moment.locale === 'function' &&
    moment.isValid() &&
    `${moment.locale()}` in jalaaliMonths
  ) {
    return true;
  }
  return false;
};

const jalaali = {
  formatDate: gregorianMoment => {
    if (isSupportedMoment(gregorianMoment)) {
      const jalaaliDate = jalaaliJs.toJalaali(
        gregorianMoment.year(),
        gregorianMoment.month() + 1,
        gregorianMoment.date(),
      );
      const localeJalaaliMonths = jalaaliMonths[gregorianMoment.locale()];
      const jalaaliMonth = localeJalaaliMonths[jalaaliDate.jm - 1];
      const output = `${jalaaliDate.jd} ${jalaaliMonth} ${jalaaliDate.jy}`;
      return output;
    }
    return null;
  },
};

export default jalaali;
