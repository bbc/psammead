/* eslint-disable func-names */
const moment = require('moment-timezone/moment-timezone');
const jalaaliHelper = require('./jalaali');

const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };
const pashtoJalaliFromats = [
  'HH:mm', // LT
  'HH:mm:ss', // LTS
  'DD/MM/YYYY', // L
  'D MMMM YYYY', // LL FROMAT
  'D MMMM YYYY HH:mm', // LLL FROMAT
  'dddd, D MMMM YYYY HH:mm', // LLLL FROMAT
];

const pashtoMonths = [
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
];
const persianMonths = [
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
];

const gregorianString = '31/01/2019';

test('getJalaaliDatetime for pashto locale', function() {
  const gregorinaMonent = moment(
    gregorianString,
    pashtoJalaliFromats,
    'ps',
    true,
  );
  assert.equal(
    jalaaliHelper.getJalaaliDatetime(gregorinaMonent, pashtoMonths),
    '11 سلواغه 1397',
  );
});

test('getJalaaliDatetime for persian locale', function() {
  const gregorinaMonent = moment(
    gregorianString,
    pashtoJalaliFromats,
    'fa',
    true,
  );
  assert.equal(
    jalaaliHelper.getJalaaliDatetime(gregorinaMonent, persianMonths),
    '11 بهمن 1397',
  );
});
