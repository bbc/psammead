// Returns offset in ms:
const getOffsetTimestamp = (timezone, timestamp) => {
  let currentOffsetIndex;
  for (let i = 0; i < timezone.untils.length; i += 1) {
    const currentTimestamp = timezone.untils[i];
    if (timestamp < currentTimestamp) {
      currentOffsetIndex = i;
    }
  }

  // if undefined, we return last item:
  if (currentOffsetIndex === undefined)
    return timezone.offsets[timezone.offsets.length - 1] * 60 * 1000;

  return timezone.offsets[currentOffsetIndex] * 60 * 1000;
};

const postProcessString = (postformat, string) => {
  if (typeof postformat === 'function') {
    return postformat(string.toString());
  }
  return string;
};

// From moment.js
const replacementsForLowercase = uppercaseString => {
  return uppercaseString.replace(/MMMM|MM|DD|dddd/g, val => val.slice(1));
};

const tempTokenize = (tempTokenizeObject, regexString, replaceContent) => {
  let { stringTempTokenized } = tempTokenizeObject;
  const { tempTokensArray } = tempTokenizeObject;

  const regexReplace = new RegExp(regexString);
  const regexMatch = new RegExp(regexString, 'g');

  const newTempTokensArray = Array.from(tempTokensArray);
  const startIndex = newTempTokensArray.length;
  const newMatches = (stringTempTokenized.match(regexMatch) || []).map(item => {
    if (replaceContent) {
      return replaceContent;
    }

    // remove outter brackets:
    return item.slice(1, -1);
  });

  newTempTokensArray.push(...newMatches);

  for (let i = startIndex; i < newTempTokensArray.length; i += 1) {
    stringTempTokenized = stringTempTokenized.replace(regexReplace, `&${i}&`);
  }

  return {
    stringTempTokenized,
    tempTokensArray: newTempTokensArray,
  };
};

const tokensFormulas = {
  A: (date, localeData) => {
    if (typeof localeData.meridiem === 'function') {
      return localeData.meridiem(date.getUTCHours(), date.getUTCMinutes());
    }

    return date.getUTCHours() >= 12 ? 'PM' : 'AM';
  },
  a: (date, localeData) => {
    if (typeof localeData.meridiem === 'function') {
      return localeData.meridiem(date.getUTCHours(), date.getUTCMinutes());
    }

    return date.getUTCHours() >= 12 ? 'pm' : 'am';
  },
  dddd: (date, localeData) =>
    localeData.weekdays.format
      ? localeData.weekdays.format[date.getUTCDay()]
      : localeData.weekdays[date.getUTCDay()],
  ddd: (date, localeData) =>
    localeData.weekdaysShort.format
      ? localeData.weekdaysShort.format[date.getUTCDay()]
      : localeData.weekdaysShort[date.getUTCDay()],
  dd: (date, localeData) =>
    localeData.weekdaysMin.format
      ? localeData.weekdaysMin.format[date.getUTCDay()]
      : localeData.weekdaysMin[date.getUTCDay()],
  DD: date =>
    date
      .getUTCDate()
      .toString()
      .padStart(2, '0'),
  Do: (date, localeData) => {
    if (localeData.ordinal === undefined) return date.getUTCDate();
    return typeof localeData.ordinal === 'function'
      ? localeData.ordinal(date.getUTCDate(), 'D')
      : localeData.ordinal.replace('%d', date.getUTCDate());
  },
  D: date => date.getUTCDate(),
  MMMM: (date, localeData) =>
    localeData.months.format
      ? localeData.months.format[date.getUTCMonth()]
      : localeData.months[date.getUTCMonth()],
  MMM: (date, localeData) => {
    if (localeData.monthsShort.format) {
      return localeData.monthsShort.format[date.getUTCMonth()];
    }

    return typeof localeData.monthsShort === 'function'
      ? localeData.monthsShort(date.getUTCMonth(), 'MMM')
      : localeData.monthsShort[date.getUTCMonth()];
  },
  MM: date => (date.getUTCMonth() + 1).toString().padStart(2, '0'),
  M: date => date.getUTCMonth() + 1,
  YYYY: date => date.getUTCFullYear(),
  YY: date =>
    date
      .getUTCFullYear()
      .toString()
      .substr(2, 2),
  HH: date =>
    date
      .getUTCHours()
      .toString()
      .padStart(2, '0'),
  H: date => date.getUTCHours(),
  h: date => date.getUTCHours() - (date.getUTCHours() > 12 ? 12 : 0),
  mm: date =>
    date
      .getUTCMinutes()
      .toString()
      .padStart(2, '0'),
  ss: date =>
    date
      .getUTCSeconds()
      .toString()
      .padStart(2, '0'),
  Z: (_, __, offset) => {
    if (offset === 0) return 'Z';
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const offsetHours = Math.floor(Math.abs(offset / hour));
    const offsetMinutes = Math.floor(
      Math.abs((offset % (offsetHours * hour)) / minute),
    );
    return `${-offset >= 0 ? '+' : '-'}${offsetHours
      .toString()
      .padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`;
  },
};

const executeToken = (token, date, localeData, timestampOffset) => {
  try {
    return tokensFormulas[token](date, localeData, timestampOffset);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e, token);
    return 'Error';
  }
};

const replaceLongFormats = (string, localeData) => {
  return string
    .replace('LLLL', localeData.longDateFormat.LLLL)
    .replace(
      'llll',
      localeData.longDateFormat.llll
        ? localeData.longDateFormat.llll
        : replacementsForLowercase(localeData.longDateFormat.LLLL),
    )
    .replace(
      'lll',
      localeData.longDateFormat.lll
        ? localeData.longDateFormat.lll
        : replacementsForLowercase(localeData.longDateFormat.LLL),
    )
    .replace('LLL', localeData.longDateFormat.LLL)
    .replace(
      'll',
      localeData.longDateFormat.ll
        ? localeData.longDateFormat.ll
        : replacementsForLowercase(localeData.longDateFormat.LL),
    )
    .replace('LL', localeData.longDateFormat.LL)
    .replace('LTS', localeData.longDateFormat.LTS)
    .replace('LT', localeData.longDateFormat.LT)
    .replace(
      'l',
      localeData.longDateFormat.l
        ? localeData.longDateFormat.l
        : replacementsForLowercase(localeData.longDateFormat.L),
    )
    .replace('L', localeData.longDateFormat.L);
};

export {
  getOffsetTimestamp,
  postProcessString,
  tempTokenize,
  executeToken,
  replaceLongFormats,
};
