/* eslint-disable func-names */
const moment = require('moment');
const jalaaliHelper = require('./jalaali');
const stringHelper = require('./stringHelper');

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
  const gregorianMonent = moment(
    gregorianString,
    pashtoJalaliFromats,
    'ps',
    true,
  );
  assert.equal(
    stringHelper.useEasternNumerals(
      jalaaliHelper.getJalaaliDatetime(gregorianMonent, pashtoMonths),
    ),
    '۱۱ سلواغه ۱۳۹۷',
  );
});

test('getJalaaliDatetime for persian locale', function() {
  const gregorianMonent = moment(
    gregorianString,
    pashtoJalaliFromats,
    'fa',
    true,
  );
  assert.equal(
    stringHelper.useEasternNumerals(
      jalaaliHelper.getJalaaliDatetime(gregorianMonent, persianMonths),
    ),
    '۱۱ بهمن ۱۳۹۷',
  );
});
