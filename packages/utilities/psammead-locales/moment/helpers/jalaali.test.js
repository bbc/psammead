var moment = require('moment');
var jalaaliHelper = require('./jalaali');
var stringHelper = require('./stringHelper');

var assert = {
  equal: function(val1, val2) {
    return expect(val1).toEqual(val2);
  },
};
var pashtoJalaliFromats = [
  'HH:mm', // LT
  'HH:mm:ss', // LTS
  'DD/MM/YYYY', // L
  'D MMMM YYYY', // LL FROMAT
  'D MMMM YYYY HH:mm', // LLL FROMAT
  'dddd, D MMMM YYYY HH:mm', // LLLL FROMAT
];

var pashtoMonths = [
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
var persianMonths = [
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

var gregorianString = '31/01/2019';

test('getJalaaliDatetime for pashto locale', function() {
  var gregorianMonent = moment(
    gregorianString,
    pashtoJalaliFromats,
    'ps',
    true
  );
  assert.equal(
    stringHelper.useEasternNumerals(
      jalaaliHelper.getJalaaliDatetime(gregorianMonent, pashtoMonths)
    ),
    '۱۱ سلواغه ۱۳۹۷'
  );
});

test('getJalaaliDatetime for persian locale', function() {
  var gregorianMonent = moment(
    gregorianString,
    pashtoJalaliFromats,
    'fa',
    true
  );
  assert.equal(
    stringHelper.useEasternNumerals(
      jalaaliHelper.getJalaaliDatetime(gregorianMonent, persianMonths)
    ),
    '۱۱ بهمن ۱۳۹۷'
  );
});
