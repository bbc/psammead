import moment from 'moment';
import { getJalaaliCalendar } from './jalaali';

const testMoment = moment('09-20-2019', 'MM-DD-YYYY');

test('Persian Tests', () => {
  testMoment.locale('fa');
  expect(getJalaaliCalendar(testMoment)).toBe('29 شهریور 1398');
});
