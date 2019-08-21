/* eslint-disable */
const moment = require('moment');

require('./ps');

moment.locale('ps');
const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };

test('parse', function () {
    const testMonths = 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split('_');
    const shortMonths = 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split('_');

    function equalTest(input, mmm, i) {
        assert.equal(
            moment(input, mmm).month(),
            i,
            `${input} should be month ${i + 1}`,
        );
    }
    for (let i = 0; i < 12; i++) {
        equalTest(testMonths[i], 'MMM', i);
        equalTest(shortMonths[i], 'MMM', i);

        equalTest(testMonths[i], 'MMMM', i);
        equalTest(shortMonths[i], 'MMMM', i);

        equalTest(testMonths[i].toLocaleLowerCase(), 'MMMM', i);
        equalTest(shortMonths[i].toLocaleLowerCase(), 'MMMM', i);

        equalTest(testMonths[i].toLocaleUpperCase(), 'MMMM', i);
        equalTest(shortMonths[i].toLocaleUpperCase(), 'MMMM', i);
    }
});


test('format', function () {
    var dates = [
        ['LT', '۱۵:۲۵'],
        ['LTS', '۱۵:۲۵:۵۰'],
        ['LL', '۱٤ فبروري ۲۰۱۰'],
        ['LLL', '۱٤ فبروري ۲۰۱۰ ۱۵:۲۵'],
        ['LLLL', 'اتوار، ۱٤ فبروري ۲۰۱۰ ۱۵:۲۵']
    ]
    var gdate = moment(new Date(2010, 1, 14, 15, 25, 50, 125));

    for (var i = 0; i < dates.length; i++) {
        assert.equal(gdate.format(dates[i][0]), dates[i][1], dates[i][0] + ' ---> ' + dates[i][1]);
    }
});

test('format ordinal', function () {

    //'۱', '۲', '۳', '٤', '۵'
    assert.equal(moment([2011, 0, 1]).format('DDDo'), '۱', '۱');
    assert.equal(moment([2011, 0, 2]).format('DDDo'), '۲', '۲');
    assert.equal(moment([2011, 0, 3]).format('DDDo'), '۳', '۳');
    assert.equal(moment([2011, 0, 4]).format('DDDo'), '٤', '٤');
    assert.equal(moment([2011, 0, 5]).format('DDDo'), '۵', '۵');


    //'۶', '۷', '۸', '۹', '۱۰'
    assert.equal(moment([2011, 0, 6]).format('DDDo'), '۶', '۶');
    assert.equal(moment([2011, 0, 7]).format('DDDo'), '۷', '۷');
    assert.equal(moment([2011, 0, 8]).format('DDDo'), '۸', '۸');
    assert.equal(moment([2011, 0, 9]).format('DDDo'), '۹', '۹');
    assert.equal(moment([2011, 0, 10]).format('DDDo'), '۱۰', '۱۰');

    //'۱۱', '۱۲', '۱۳', '۱٤','۱۵'
    assert.equal(moment([2011, 0, 11]).format('DDDo'), '۱۱', '۱۱');
    assert.equal(moment([2011, 0, 12]).format('DDDo'), '۱۲', '۱۲');
    assert.equal(moment([2011, 0, 13]).format('DDDo'), '۱۳', '۱۳');
    assert.equal(moment([2011, 0, 14]).format('DDDo'), '۱٤', '۱٤');
    assert.equal(moment([2011, 0, 15]).format('DDDo'), '۱۵', '۱۵');

    //'۱۶', '۱۷', '۱۸', '۱۹', '۲۰'
    assert.equal(moment([2011, 0, 16]).format('DDDo'), '۱۶', '۱۶');
    assert.equal(moment([2011, 0, 17]).format('DDDo'), '۱۷', '۱۷');
    assert.equal(moment([2011, 0, 18]).format('DDDo'), '۱۸', '۱۸');
    assert.equal(moment([2011, 0, 19]).format('DDDo'), '۱۹', '۱۹');
    assert.equal(moment([2011, 0, 20]).format('DDDo'), '۲۰', '۲۰');

    // '۲۱', '۲۲', '۲۳', '۲٤', '۲۵'
    assert.equal(moment([2011, 0, 21]).format('DDDo'), '۲۱', '۲۱');
    assert.equal(moment([2011, 0, 22]).format('DDDo'), '۲۲', '۲۲');
    assert.equal(moment([2011, 0, 23]).format('DDDo'), '۲۳', '۲۳');
    assert.equal(moment([2011, 0, 24]).format('DDDo'), '۲٤', '۲٤');
    assert.equal(moment([2011, 0, 25]).format('DDDo'), '۲۵', '۲۵');

    // '۲۶', '۲۷', '۲۸', '۲۹', '۳۰'
    assert.equal(moment([2011, 0, 26]).format('DDDo'), '۲۶', '۲۶');
    assert.equal(moment([2011, 0, 27]).format('DDDo'), '۲۷', '۲۷');
    assert.equal(moment([2011, 0, 28]).format('DDDo'), '۲۸', '۲۸');
    assert.equal(moment([2011, 0, 29]).format('DDDo'), '۲۹', '۲۹');
    assert.equal(moment([2011, 0, 30]).format('DDDo'), '۳۰', '۳۰');

    // '۳۱'
    assert.equal(moment([2011, 0, 31]).format('DDDo'), '۳۱', '۳۱');
});

test('format month', function () {
    var expected = ['جنوري جنوري', 'فبروري فبروري', 'مارچ مارچ', 'اپریل اپریل', 'می می', 'جون جون', 'جولاې جولاې', 'اګست اګست', 'سپتمبر سپتمبر', 'اکتوبر اکتوبر', 'نومبر نومبر', 'ډیسمبر ډیسمبر'];
    for (var i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
    }
});


test('format week', function () {
    var expected = ['اتوار اتوار ا', ' ګول  ګول ګ', 'نهه نهه ن', 'شورو شورو ش', 'زیارت زیارت ز', 'جمعه جمعه ج', 'خالي خالي  خ'];
    for (var i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
    }
});