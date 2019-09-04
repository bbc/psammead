/* eslint-disable */
import moment from 'moment';
import './pa';

moment.locale('pa')

// This asset overrides the gunit assertion done in the moment codebase.
// Format and styling of this file has been keep consistent with the official moment tests.
// An example of these tests can be seen at https://github.com/moment/moment/blob/develop/src/test/locale/en-gb.js
const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };

test('parse', function () {
  var tests = 'ਜਨਵਰੀ ਜਨਵਰੀ_ਫ਼ਰਵਰੀ ਫ਼ਰਵਰੀ_ਮਾਰਚ ਮਾਰਚ_ਅਪ੍ਰੈਲ ਅਪ੍ਰੈਲ_ਮਈ ਮਈ_ਜੂਨ ਜੂਨ_ਜੁਲਾਈ ਜੁਲਾਈ_ਅਗਸਤ ਅਗਸਤ_ਸਤੰਬਰ ਸਤੰਬਰ_ਅਕਤੂਬਰ ਅਕਤੂਬਰ_ਨਵੰਬਰ ਨਵੰਬਰ_ਦਸੰਬਰ ਦਸੰਬਰ'.split('_'), i;
    function equalTest(input, mmm, i) {
        assert.equal(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
    }
    for (i = 0; i < 12; i++) {
        tests[i] = tests[i].split(' ');
        equalTest(tests[i][0], 'MMM', i);
        equalTest(tests[i][1], 'MMM', i);
        equalTest(tests[i][0], 'MMMM', i);
        equalTest(tests[i][1], 'MMMM', i);
        equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
        equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
        equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
    }
});

test('format', function () {
    var a = [
            ['dddd, Do MMMM YYYY, a h:mm:ss ਵਜੇ',  'ਐਤਵਾਰ, 14 ਫ਼ਰਵਰੀ 2010, ਦੁਪਹਿਰ 3:25:50 ਵਜੇ'],
            ['ddd, a h ਵਜੇ',                       'ਐਤ, ਦੁਪਹਿਰ 3 ਵਜੇ'],
            ['M Mo MM MMMM MMM',                   '2 2 02 ਫ਼ਰਵਰੀ ਫ਼ਰਵਰੀ'],
            ['YYYY YY',                            '2010 10'],
            ['D Do DD',                            '14 14 14'],
            ['d do dddd ddd dd',                   '0 0 ਐਤਵਾਰ ਐਤ ਐਤ'],
            ['DDD DDDo DDDD',                      '45 45 045'],
            ['w wo ww',                            '8 8 08'],
            ['h hh',                               '3 03'],
            ['H HH',                               '15 15'],
            ['m mm',                               '25 25'],
            ['s ss',                               '50 50'],
            ['a A',                                'ਦੁਪਹਿਰ ਦੁਪਹਿਰ'],
            ['LTS',                                'ਦੁਪਹਿਰ 3:25:50 ਵਜੇ'],
            ['L',                                  '14/02/2010'],
            ['LL',                                 '14 ਫ਼ਰਵਰੀ 2010'],
            ['LLL',                                '14 ਫ਼ਰਵਰੀ 2010, ਦੁਪਹਿਰ 3:25 ਵਜੇ'],
            ['LLLL',                               'ਐਤਵਾਰ, 14 ਫ਼ਰਵਰੀ 2010, ਦੁਪਹਿਰ 3:25 ਵਜੇ'],
            ['l',                                  '14/2/2010'],
            ['ll',                                 '14 ਫ਼ਰਵਰੀ 2010'],
            ['lll',                                '14 ਫ਼ਰਵਰੀ 2010, ਦੁਪਹਿਰ 3:25 ਵਜੇ'],
            ['llll',                               'ਐਤ, 14 ਫ਼ਰਵਰੀ 2010, ਦੁਪਹਿਰ 3:25 ਵਜੇ']
        ],
        b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        assert.equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test('format ordinal', function () {
    assert.equal(moment([2011, 0, 1]).format('DDDo'), '1', '1');
    assert.equal(moment([2011, 0, 2]).format('DDDo'), '2', '2');
    assert.equal(moment([2011, 0, 3]).format('DDDo'), '3', '3');
    assert.equal(moment([2011, 0, 4]).format('DDDo'), '4', '4');
    assert.equal(moment([2011, 0, 5]).format('DDDo'), '5', '5');
    assert.equal(moment([2011, 0, 6]).format('DDDo'), '6', '6');
    assert.equal(moment([2011, 0, 7]).format('DDDo'), '7', '7');
    assert.equal(moment([2011, 0, 8]).format('DDDo'), '8', '8');
    assert.equal(moment([2011, 0, 9]).format('DDDo'), '9', '9');
    assert.equal(moment([2011, 0, 10]).format('DDDo'), '10', '10');

    assert.equal(moment([2011, 0, 11]).format('DDDo'), '11', '11');
    assert.equal(moment([2011, 0, 12]).format('DDDo'), '12', '12');
    assert.equal(moment([2011, 0, 13]).format('DDDo'), '13', '13');
    assert.equal(moment([2011, 0, 14]).format('DDDo'), '14', '14');
    assert.equal(moment([2011, 0, 15]).format('DDDo'), '15', '15');
    assert.equal(moment([2011, 0, 16]).format('DDDo'), '16', '16');
    assert.equal(moment([2011, 0, 17]).format('DDDo'), '17', '17');
    assert.equal(moment([2011, 0, 18]).format('DDDo'), '18', '18');
    assert.equal(moment([2011, 0, 19]).format('DDDo'), '19', '19');
    assert.equal(moment([2011, 0, 20]).format('DDDo'), '20', '20');

    assert.equal(moment([2011, 0, 21]).format('DDDo'), '21', '21');
    assert.equal(moment([2011, 0, 22]).format('DDDo'), '22', '22');
    assert.equal(moment([2011, 0, 23]).format('DDDo'), '23', '23');
    assert.equal(moment([2011, 0, 24]).format('DDDo'), '24', '24');
    assert.equal(moment([2011, 0, 25]).format('DDDo'), '25', '25');
    assert.equal(moment([2011, 0, 26]).format('DDDo'), '26', '26');
    assert.equal(moment([2011, 0, 27]).format('DDDo'), '27', '27');
    assert.equal(moment([2011, 0, 28]).format('DDDo'), '28', '28');
    assert.equal(moment([2011, 0, 29]).format('DDDo'), '29', '29');
    assert.equal(moment([2011, 0, 30]).format('DDDo'), '30', '30');

    assert.equal(moment([2011, 0, 31]).format('DDDo'), '31', '31');
});
