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
        ['LT', '15:25 - 30 زمری 1398'],
        ['LTS', '15:25:50 - 30 زمری 1398'],
        ['LL', '14 فبروري 2010 - 25 سلواغه 1388'],
        ['LLL', '14 فبروري 2010 15:25 - 25 سلواغه 1388'],
        ['LLLL','اتوار, 14 فبروري 2010 15:25 - 25 سلواغه 1388']
    ]
    var gdate = moment(new Date(2010, 1, 14, 15, 25, 50, 125)); 
    console.log(gdate.format('LTS')); 

    for (var i = 0; i < dates.length; i++) {
        assert.equal(gdate.format(dates[i][0]), dates[i][1], dates[i][0] + ' ---> ' + dates[i][1]);
    }
});
