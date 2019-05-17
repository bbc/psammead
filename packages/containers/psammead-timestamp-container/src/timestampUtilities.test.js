import {
  formatUnixTimestamp,
  isValidDateTime,
  showRelativeTime,
} from './timestampUtilities';
import timestampGenerator from './helpers/testHelpers';

const timezone = 'Europe/London';
const timestamp = 1539969006000; // 19 October 2018

describe('Timestamp utility functions', () => {
  describe('isValidDateTime', () => {
    it('should return true if timestamp is valid', () => {
      expect(isValidDateTime(timestamp)).toEqual(true);
      expect(isValidDateTime(0)).toEqual(true);
      expect(isValidDateTime(-30000000)).toEqual(true);
    });

    it('should return false if timestamp is invalid or missing', () => {
      expect(isValidDateTime('foo')).toEqual(false);
      expect(isValidDateTime(null)).toEqual(false);
      expect(isValidDateTime(undefined)).toEqual(false);
      expect(isValidDateTime()).toEqual(false);
    });
  });

  describe('formatUnixTimestamp', () => {
    const GMTTimestamp = 1483275600000; // 1 January 2017 GMT
    const BSTTimestamp = 1496235600000; // 31 May 2017 BST

    it('should return BST for a BST timestamp', () => {
      const result = formatUnixTimestamp(
        BSTTimestamp,
        'D MMMM YYYY, HH:mm z',
        timezone,
      );
      expect(result).toContain('BST');
    });

    it('should return GMT for a GMT timestamp', () => {
      const result = formatUnixTimestamp(
        GMTTimestamp,
        'D MMMM YYYY, HH:mm z',
        timezone,
      );
      expect(result).toContain('GMT');
    });

    it('should return date and time in expected format', () => {
      const result = formatUnixTimestamp(
        GMTTimestamp,
        'D MMMM YYYY, HH:mm z',
        timezone,
      );
      expect(result).toEqual('1 January 2017, 13:00 GMT');
    });

    it('should return short date in expected format', () => {
      const result = formatUnixTimestamp(GMTTimestamp, 'YYYY-MM-DD', timezone);
      expect(result).toEqual('2017-01-01');
    });

    it('should return long date in expected format', () => {
      const result = formatUnixTimestamp(GMTTimestamp, 'D MMMM YYYY', timezone);
      expect(result).toEqual('1 January 2017');
    });
  });

  describe('showRelativetime', () => {
    const format = 'D MMMM YYYY';
    const isRelative = false;

    it('should return relative timestamp if isRelative is true', () => {
      const nineHoursAgo = timestampGenerator({ hours: 9 });
      const isRelativeIsTrue = true;
      const output = showRelativeTime(nineHoursAgo, isRelativeIsTrue, format, timezone);
      const expectedOutput = '9 hours ago';
      expect(output).toEqual(expectedOutput);
    });

    it('should return timestamp with format if format is provided', () => {
      const output = showRelativeTime(timestamp, isRelative, format, timezone);
      const expectedOutput = '19 October 2018';
      expect(output).toEqual(expectedOutput);
    });

    it('should return timestamp with default format if format is not provided', () => {
      const nullFormat = null;
      const output = showRelativeTime(timestamp, isRelative, nullFormat, timezone);
      const expectedOutput = '19 October 2018, 18:10 BST';
      expect(output).toEqual(expectedOutput);
    });
  });
});
