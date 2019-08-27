/* eslint-disable */
const moment = require('moment');

require('./fa');

moment.locale('fa');


const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };
/*
test('parse Gregorian months', function () {

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
*/
test('format dates and times', function () {
    var dates = [
        ['LT', '<time datetime = "2019-8-27"> ۰۱:۰۱ </time> - <time> ۵ شهریور ۱۳۹۸</time>'],       
        ['LTS', '<time datetime = "2019-8-27"> ۰۱:۰۱:۰۱ </time> - <time> ۵ شهریور ۱۳۹۸</time>'],
        ['L','<time datetime = "2019-8-9"> ۰۹/۰۸/۲۰۱۹ </time> - <time> ۱۸ مرداد ۱۳۹۸</time>'],
        ['LL', '<time datetime = "2019-8-9"> ۹ اوت ۲۰۱۹ </time> - <time> ۱۸ مرداد ۱۳۹۸</time>'],
        ['LLL', '<time datetime = "2019-8-9"> ۹ اوت ۲۰۱۹ ۰۱:۰۱ </time> - <time> ۱۸ مرداد ۱۳۹۸</time>'],
        ['LLLL', '<time datetime = "2019-8-9"> جمعه، ۹ اوت ۲۰۱۹ ۰۱:۰۱ </time> - <time> ۱۸ مرداد ۱۳۹۸</time>']
    ]
    var gdate = moment(new Date(2019, 7, 9, 1, 1, 1, 1));

    for (var i = 0; i < dates.length; i++) {
        assert.equal(gdate.format(dates[i][0]), dates[i][1], dates[i][0] + ' ---> ' + dates[i][1]);
    }
});

test('format ordinal', function () {

    //'۱', '۲', '۳', '٤', '۵'
    assert.equal(moment([2011, 0, 1]).format('DDDo'), '۱م', '۱');
    assert.equal(moment([2011, 0, 2]).format('DDDo'), '۲م', '۲');
    assert.equal(moment([2011, 0, 3]).format('DDDo'), '۳م', '۳');
    assert.equal(moment([2011, 0, 4]).format('DDDo'), '٤م', '٤م');
    assert.equal(moment([2011, 0, 5]).format('DDDo'), '۵م', '۵');


    //'۶', '۷', '۸', '۹', '۱۰'
    assert.equal(moment([2011, 0, 6]).format('DDDo'), '۶م', '۶');
    assert.equal(moment([2011, 0, 7]).format('DDDo'), '۷م', '۷');
    assert.equal(moment([2011, 0, 8]).format('DDDo'), '۸م', '۸');
    assert.equal(moment([2011, 0, 9]).format('DDDo'), '۹م', '۹');
    assert.equal(moment([2011, 0, 10]).format('DDDo'), '۱۰م', '۱۰');

    //'۱۱', '۱۲', '۱۳', '۱٤','۱۵'
    assert.equal(moment([2011, 0, 11]).format('DDDo'), '۱۱م', '۱۱');
    assert.equal(moment([2011, 0, 12]).format('DDDo'), '۱۲م', '۱۲');
    assert.equal(moment([2011, 0, 13]).format('DDDo'), '۱۳م', '۱۳');
    assert.equal(moment([2011, 0, 14]).format('DDDo'), '۱٤م', '۱٤');
    assert.equal(moment([2011, 0, 15]).format('DDDo'), '۱۵م', '۱۵');

    //'۱۶', '۱۷', '۱۸', '۱۹', '۲۰'
    assert.equal(moment([2011, 0, 16]).format('DDDo'), '۱۶م', '۱۶');
    assert.equal(moment([2011, 0, 17]).format('DDDo'), '۱۷م', '۱۷');
    assert.equal(moment([2011, 0, 18]).format('DDDo'), '۱۸م', '۱۸');
    assert.equal(moment([2011, 0, 19]).format('DDDo'), '۱۹م', '۱۹');
    assert.equal(moment([2011, 0, 20]).format('DDDo'), '۲۰م', '۲۰');

    // '۲۱', '۲۲', '۲۳', '۲٤', '۲۵'
    assert.equal(moment([2011, 0, 21]).format('DDDo'), '۲۱م', '۲۱');
    assert.equal(moment([2011, 0, 22]).format('DDDo'), '۲۲م', '۲۲');
    assert.equal(moment([2011, 0, 23]).format('DDDo'), '۲۳م', '۲۳');
    assert.equal(moment([2011, 0, 24]).format('DDDo'), '۲٤م', '۲٤');
    assert.equal(moment([2011, 0, 25]).format('DDDo'), '۲۵م', '۲۵');

    // '۲۶', '۲۷', '۲۸', '۲۹', '۳۰'
    assert.equal(moment([2011, 0, 26]).format('DDDo'), '۲۶م', '۲۶');
    assert.equal(moment([2011, 0, 27]).format('DDDo'), '۲۷م', '۲۷');
    assert.equal(moment([2011, 0, 28]).format('DDDo'), '۲۸م', '۲۸');
    assert.equal(moment([2011, 0, 29]).format('DDDo'), '۲۹م', '۲۹');
    assert.equal(moment([2011, 0, 30]).format('DDDo'), '۳۰م', '۳۰');

    // '۳۱'
    assert.equal(moment([2011, 0, 31]).format('DDDo'), '۳۱م', '۳۱');
});

test('format month', function () {
    var expected = 'ژانویه ژانویه_فوریه فوریه_مارس مارس_آوریل آوریل_مه مه_ژوئن ژوئن_ژوئیه ژوئیه_اوت اوت_سپتامبر سپتامبر_اکتبر اکتبر_نوامبر نوامبر_دسامبر دسامبر'.split('_');
    for (var i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
    }
});

test('format week', function () {
    var expected = ['یک‌شنبه یک‌شنبه ی', 'دوشنبه دوشنبه د', 'سه‌شنبه سه‌شنبه س', 'چهارشنبه چهارشنبه چ', 'پنج‌شنبه پنج‌شنبه پ', 'جمعه جمعه ج', 'شنبه شنبه ش'];
    for (var i = 0; i < expected.length; i++) {
        assert.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
    }
});

test('from', function () {
    var start = moment([2007, 1, 28]);
    assert.equal(start.from(moment([2007, 1, 28]).add({ s: 44 }), true), 'چند ثانیه', '44 seconds = few seconds');
    assert.equal(start.from(moment([2007, 1, 28]).add({ s: 45 }), true), 'یک دقیقه', '45 seconds = one minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({ s: 89 }), true), 'یک دقیقه', '89 seconds = onew minute');
    assert.equal(start.from(moment([2007, 1, 28]).add({ s: 90 }), true), '۲ دقیقه'), '90 seconds = two minutes';
    assert.equal(start.from(moment([2007, 1, 28]).add({ m: 44 }), true), '٤٤ دقیقه', ' 44 minutes = 44 minutes');

    assert.equal(start.from(moment([2007, 1, 28]).add({ m: 45 }), true), 'یک ساعت', '45 minutes = one hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({ m: 89 }), true), 'یک ساعت', '89 minutes = an hour');
    assert.equal(start.from(moment([2007, 1, 28]).add({ m: 90 }), true), '۲ ساعت', '90 minutes = 2 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 5 }), true), '۵ ساعت', '5 hours = 5 hours');
    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 21 }), true), '۲۱ ساعت', '21 hours = 21 hours');

    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 22 }), true), 'یک روز', '22 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 35 }), true), 'یک روز', '35 hours = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({ h: 36 }), true), '۲ روز', '36 hours = 2 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 1 }), true), 'یک روز', '1 day = a day');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 5 }), true), '۵ روز', '5 days = 5 days');

    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 25 }), true), '۲۵ روز', '25 days = 25 days');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 26 }), true), 'یک ماه', '26 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 30 }), true), 'یک ماه', '30 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 43 }), true), 'یک ماه', '43 days = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 46 }), true), '۲ ماه', '46 days = 2 months');

    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 74 }), true), '۲ ماه', '75 days = 2 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 76 }), true), '۳ ماه', '76 days = 3 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({ M: 1 }), true), 'یک ماه', '1 month = a month');
    assert.equal(start.from(moment([2007, 1, 28]).add({ M: 5 }), true), '۵ ماه', '5 months = 5 months');
    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 345 }), true), 'یک سال', '345 days = a year');

    assert.equal(start.from(moment([2007, 1, 28]).add({ d: 548 }), true), '۲ سال', '548 days = 2 years');
    assert.equal(start.from(moment([2007, 1, 28]).add({ y: 1 }), true), 'یک سال', '1 year = a year');
    assert.equal(start.from(moment([2007, 1, 28]).add({ y: 5 }), true), '۵ سال', '5 years = 5 years');

});


test('suffix', function () {
    assert.equal(moment(30000).from(0), 'در چند ثانیه', 'prefix');
    assert.equal(moment(0).from(30000), 'چند ثانیه پیش', 'suffix');
});

test('now from now', function () {
    assert.equal(moment().fromNow(), 'چند ثانیه پیش', 'now from now should display as in the past');
});

test('fromNow', function () {
    assert.equal(moment().add({ s: 30 }).fromNow(), 'در چند ثانیه', 'in a few seconds');
    assert.equal(moment().add({ d: 5 }).fromNow(), 'در ۵ روز', 'in 5 days');
});

test('calendar day', function () {
    var a = moment().hours(12).minutes(0).seconds(0);

    assert.equal(moment(a).calendar(),'امروز ساعت ۱۲:۰۰', 'today at the same time');
    assert.equal(moment(a).add({ m: 25 }).calendar(), 'امروز ساعت ۱۲:۲۵', 'Now plus 25 min');
    assert.equal(moment(a).add({ h: 1 }).calendar(), 'امروز ساعت ۱۳:۰۰', 'Now plus 1 hour');
    assert.equal(moment(a).add({ d: 1 }).calendar(), 'فردا ساعت ۱۲:۰۰', 'tomorrow at the same time');
    assert.equal(moment(a).subtract({ h: 1 }).calendar(), 'امروز ساعت ۱۱:۰۰', 'Now minus 1 hour');
    assert.equal(moment(a).subtract({ d: 1 }).calendar(),'دیروز ساعت ۱۲:۰۰', 'yesterday at the same time');
});

test('calendar next week', function () {
    var m;
    for (var i = 2; i < 7; i++) {
       
        m = moment().add({ d: i });
        assert.equal(m.calendar(), m.format('dddd [ساعت] LT'), 'Today + ' + i + ' days current time');
      
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(), m.format('dddd [ساعت] LT'), 'Today + ' + i + ' days beginning of day');
       
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(), m.format('dddd [ساعت] LT'), 'Today + ' + i + ' days end of day');
    }
});

test('calendar last week', function () {
    var i, m;
    for (i = 2; i < 7; i++) {
        m = moment().subtract({d: i});
        assert.equal(m.calendar(),       m.format('dddd [پیش ساعت] LT'),  'Today - ' + i + ' days current time');
        m.hours(0).minutes(0).seconds(0).milliseconds(0);
        assert.equal(m.calendar(),       m.format('dddd [پیش ساعت] LT'),  'Today - ' + i + ' days beginning of day');
        m.hours(23).minutes(59).seconds(59).milliseconds(999);
        assert.equal(m.calendar(),       m.format('dddd [پیش ساعت] LT'),  'Today - ' + i + ' days end of day');
    }
});

test('calendar all else', function () {
    var weeksAgo = moment().subtract({w: 1}),
        weeksFromNow = moment().add({w: 1});

    assert.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '1 week ago');
    assert.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 1 week');

    weeksAgo = moment().subtract({w: 2});
    weeksFromNow = moment().add({w: 2});

    assert.equal(weeksAgo.calendar(),       weeksAgo.format('L'),  '2 weeks ago');
    assert.equal(weeksFromNow.calendar(),   weeksFromNow.format('L'),  'in 2 weeks');
});

test('weeks year starting sunday formatted', function () {
    assert.equal(moment([2011, 11, 31]).format('w ww wo'), '۱ ۰۱ ۱م', 'Dec 31 2011 should be week 1');
    assert.equal(moment([2012,  0,  6]).format('w ww wo'), '۱ ۰۱ ۱م', 'Jan  6 2012 should be week 1');
    assert.equal(moment([2012,  0,  7]).format('w ww wo'), '۲ ۰۲ ۲م', 'Jan  7 2012 should be week 2');
    assert.equal(moment([2012,  0, 13]).format('w ww wo'), '۲ ۰۲ ۲م', 'Jan 13 2012 should be week 2');
    assert.equal(moment([2012,  0, 14]).format('w ww wo'), '۳ ۰۳ ۳م', 'Jan 14 2012 should be week 3');
});
