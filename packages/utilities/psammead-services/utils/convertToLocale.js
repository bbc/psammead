import {
  getOffsetTimestamp,
  postProcessString,
  tempTokenize,
  executeToken,
  replaceLongFormats,
} from './utilities';

// List of tokens, in which order they will be replaced:
const tokens = [
  'dddd',
  'ddd',
  'dd',
  'DD',
  'Do',
  'D',
  'MMMM',
  'MMM',
  'MM',
  'M',
  'YYYY',
  'YY',
  'HH',
  'H',
  'mm',
  'ss',
  'A',
  'a',
  'h',
  'Z',
];

const displayLocale = (localeData, timezoneData, format, timestamp) => {
  // Calculate offset from UTC (timestamp) to destination timezone:
  const timestampOffset = getOffsetTimestamp(timezoneData, timestamp);
  const timestampWithOffset = timestamp - timestampOffset;

  // Date object with new timezone (with offset):
  const date = new Date(timestampWithOffset);

  let tempTokenizeObject = {
    stringTempTokenized: format !== '' ? format : 'YYYY-MM-DDTHH:mm:ssZ', // if format is empty, use ISO8601 string format:
    tempTokensArray: [],
  };

  // replace [escaped] characters with tokens:
  tempTokenizeObject = tempTokenize(
    tempTokenizeObject, // string containing format and all temp tokens
    '\\[(.*?)\\]', // regex to match string that should be tokenised
  );

  // replace long date formats from locale's "longDateFormat":
  tempTokenizeObject.stringTempTokenized = replaceLongFormats(
    tempTokenizeObject.stringTempTokenized,
    localeData,
  );

  // replace [escaped] characters added by long date formats with tokens:
  tempTokenizeObject = tempTokenize(
    tempTokenizeObject, // string containing format and all temp tokens
    '\\[(.*?)\\]', // regex to match string that should be tokenised
  );

  // tokenise all date tokens (to avoid mis-identifying tokens):
  tempTokenizeObject = tokens.reduce(
    (accumulator, token) =>
      tempTokenize(
        accumulator, // string containing format and array with all temp tokens
        token, // regex to match string that should be tokenised
        postProcessString(
          localeData.postformat,
          executeToken(token, date, localeData, timestampOffset),
        ),
      ),
    tempTokenizeObject,
  );

  // replace tokens back to their results:
  const unTokenedString = tempTokenizeObject.tempTokensArray.reduce(
    (accumulator, escapedChars, index) =>
      accumulator.replace(`&${index}&`, escapedChars),
    tempTokenizeObject.stringTempTokenized,
  );

  return unTokenedString;
};

const displayRelativeLocale = (localeData, timestampOrigin, timestampNow) => {
  const timeDifference = timestampNow - timestampOrigin;

  const isFuture = timeDifference < 0;
  const absTimeDifference = Math.abs(timeDifference);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = 365 * day;

  const years = Math.floor(absTimeDifference / year);
  const months = Math.floor((absTimeDifference % year) / month);
  const days = Math.floor((absTimeDifference % month) / day);
  const hours = Math.floor((absTimeDifference % day) / hour);
  const minutes = Math.floor((absTimeDifference % hour) / minute);
  // const seconds = Math.floor((absTimeDifference % minute) / second);

  const relativeTimeLocale = localeData.relativeTime;
  const futureOrPastString = isFuture
    ? relativeTimeLocale.future
    : relativeTimeLocale.past;

  const outputString = (value, propertyNameSingle, propertyNameMultiple) => {
    const stringSingleFormula =
      typeof relativeTimeLocale[propertyNameSingle] !== 'function'
        ? relativeTimeLocale[propertyNameSingle]
        : relativeTimeLocale[propertyNameSingle](
            1,
            undefined,
            propertyNameSingle,
          );
    if (value === 1) {
      const singleValueString = futureOrPastString.replace(
        '%s',
        stringSingleFormula,
      );
      return postProcessString(localeData.postformat, singleValueString);
    }

    const stringMultipleFormula =
      typeof relativeTimeLocale[propertyNameMultiple] !== 'function'
        ? relativeTimeLocale[propertyNameMultiple].replace('%d', value)
        : relativeTimeLocale[propertyNameMultiple](
            value,
            undefined,
            propertyNameMultiple,
          );
    const multipleValueString = futureOrPastString.replace(
      '%s',
      stringMultipleFormula,
    );
    return postProcessString(localeData.postformat, multipleValueString);
  };

  if (years !== 0) return outputString(years, 'y', 'yy');
  if (months !== 0) return outputString(months, 'M', 'MM');
  if (days !== 0) return outputString(days, 'd', 'dd');
  if (hours !== 0) return outputString(hours, 'h', 'hh');
  if (minutes !== 0) return outputString(minutes, 'm', 'mm');
  // if (seconds !== 0) return outputString(seconds, 's', 'ss');

  // default is "a minute ago":
  return outputString(1, 'm', 'mm');
};

export { displayLocale, displayRelativeLocale };
