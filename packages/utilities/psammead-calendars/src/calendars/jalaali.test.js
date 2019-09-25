import moment from 'moment';
import { getJalaaliCalendar } from './jalaali';

describe('Jalaali Conversion Tests', () => {
  const testScenarios = [
    {
      date: '2019-01-01',
      locale: 'fa',
      expected: '11 دی 1397',
      summary:
        'should return first day of the year 2019 in Jalaali for persian',
    },
    {
      date: '2019-12-31',
      locale: 'fa',
      expected: '10 دی 1398',
      summary: 'should return last day of the year 2019 in Jalaali for persian',
    },
    {
      date: '2025-02-01',
      locale: 'fa',
      expected: '13 بهمن 1403',
      summary: 'should return first day of Febuary 2025 in Jalaali for persian',
    },
    {
      date: '2025-11-31',
      locale: 'fa',
      expected: null,
      summary: "should return null as date doesn't exist",
    },
    {
      date: '31-2019-12',
      locale: 'fa',
      expected: null,
      summary: 'should return null as this is an invalid moment',
    },
    {
      date: '2019-01-01',
      locale: 'ps',
      expected: '11 مرغومی 1397',
      summary: 'should return first day of the year 2019 in Jalaali for pashto',
    },
    {
      date: '2019-12-31',
      locale: 'ps',
      expected: '10 مرغومی 1398',
      summary: 'should return last day of the year 2019 in Jalaali for pashto',
    },
    {
      date: '2025-02-01',
      locale: 'ps',
      expected: '13 سلواغه 1403',
      summary: 'should return first day of Febuary 2025 in Jalaali for pashto',
    },
    {
      date: '2025-11-31',
      locale: 'ps',
      expected: null,
      summary: "should return null as date doesn't exist",
    },
    {
      date: '31-2019-12',
      locale: 'ps',
      expected: null,
      summary: 'should return null as this is an invalid moment',
    },
  ];
  moment.defineLocale('ps', {});
  testScenarios.forEach(({ date, locale, expected, summary }) => {
    it(summary, () => {
      const testMoment = moment(date);
      testMoment.locale(locale);
      const jalaaliCalendar = getJalaaliCalendar(testMoment);
      expect(jalaaliCalendar).toEqual(expected);
    });
  });
});
