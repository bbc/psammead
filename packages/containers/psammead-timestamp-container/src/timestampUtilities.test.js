import moment from 'moment-timezone';
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
      const locale = 'en-GB';
      const output = showRelativeTime(
        nineHoursAgo,
        isRelativeIsTrue,
        format,
        timezone,
        locale,
      );
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
      const output = showRelativeTime(
        timestamp,
        isRelative,
        nullFormat,
        timezone,
      );
      const expectedOutput = '19 October 2018, 18:10 BST';
      expect(output).toEqual(expectedOutput);
    });
  });
});

describe('Moment configuration', () => {
  it('rounds down', () => {
    const wouldOtherwiseRoundUp = moment()
      .subtract(59, 'minutes')
      .subtract(59, 'seconds');

    // default moment configuration would return 'an hour ago'
    expect(wouldOtherwiseRoundUp.fromNow()).toEqual('59 minutes ago');
  });

  it('never reports relative timestamps in seconds', () => {
    const now = moment();
    // default moment configuration would return 'a few seconds ago'
    expect(now.fromNow()).toEqual('a minute ago');

    const ten = moment().subtract(10, 'seconds');
    // default moment configuration would return '10 seconds ago'
    expect(ten.fromNow()).toEqual('a minute ago');
  });

  it('reports all relative timestamps < 1 hour rounded down to nearest minute', () => {
    const ten = moment().subtract(10, 'minutes');
    // default moment configuration would return '10 minutes ago' (no change)
    expect(ten.fromNow()).toEqual('10 minutes ago');

    const fifty = moment().subtract(50, 'minutes');
    // default moment configuration would return 'an hour ago'
    expect(fifty.fromNow()).toEqual('50 minutes ago');
  });

  it('reports all relative timestamps >= 1 hour and < 24 hours rounded down to nearest hour', () => {
    const one = moment().subtract(1, 'hour');
    // default moment configuration would return 'an hour ago' (no change)
    expect(one.fromNow()).toEqual('an hour ago');

    const two = moment().subtract(2, 'hours');
    // default moment configuration would return '2 hours ago' (no change)
    expect(two.fromNow()).toEqual('2 hours ago');

    const twentyThree = moment().subtract(23, 'hours');
    // default moment configuration would return 'a day ago'
    expect(twentyThree.fromNow()).toEqual('23 hours ago');

    const allButADay = moment()
      .subtract(23, 'hours')
      .subtract(59, 'seconds');
    // default moment configuration would return 'a day ago'
    expect(allButADay.fromNow()).toEqual('23 hours ago');
  });

  it('reports all relative timestamps >= 1 day and < 1 month rounded down to nearest day', () => {
    const one = moment().subtract(1, 'day');
    // default moment configuration would return 'a day ago' (no change)
    expect(one.fromNow()).toEqual('a day ago');

    const two = moment().subtract(2, 'days');
    // default moment configuration would return '2 days ago' (no change)
    expect(two.fromNow()).toEqual('2 days ago');

    const allButAMonth = moment()
      .subtract(30, 'days')
      .add(1, 'second');
    // default moment configuration would return 'a month ago'
    expect(allButAMonth.fromNow()).toEqual('29 days ago');
  });

  it('reports all relative timestamps >= 1 month and < 1 year rounded down to nearest month', () => {
    const one = moment().subtract(1, 'month');
    // default moment configuration would return 'a month ago' (no change)
    expect(one.fromNow()).toEqual('a month ago');

    const two = moment().subtract(2, 'months');
    // default moment configuration would return '2 months ago' (no change)
    expect(two.fromNow()).toEqual('2 months ago');

    const allButAYear = moment()
      .subtract(12, 'months')
      .add(1, 'second');
    // default moment configuration would return 'a month ago'
    expect(allButAYear.fromNow()).toEqual('11 months ago');
  });
});
