/* eslint-disable */
const moment = require('moment');

require('./fa');

moment.locale('fa');


const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };

test('parse', function () {

    const testMonths = 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_');
    const shortMonths = 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_');
    
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

test('format',function(){
    var dates = [
        ['LT', '۰۱:۰۱'],
        ['LTS', '۰۱:۰۱:۰۱'],
        ['LL', '۹ اوت ۲۰۱۹'],
        ['LLL', '۹ اوت ۲۰۱۹ ۰۱:۰۱'],
        ['LLLL', 'جمعه، ۹ اوت ۲۰۱۹ ۰۱:۰۱']
    ]
    var gdate = moment(new Date (2019, 7, 9, 1, 1, 1, 1));

    for (var i = 0; i < dates.length; i++) {
        assert.equal(gdate.format(dates[i][0]), dates[i][1], dates[i][0] + ' ---> ' + dates[i][1]);
    }
});