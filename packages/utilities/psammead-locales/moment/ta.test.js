/* eslint-disable */
import moment from 'moment';
import './ta';

moment.locale('ta')

// This asset overrides the gunit assertion done in the moment codebase.
// Format and styling of this file has been keep consistent with the official moment tests.
// An example of these tests can be seen at https://github.com/moment/moment/blob/develop/src/test/locale/en-gb.js
const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };

test('parse', function () {
  var tests = 'ஜனவரி ஜனவரி_பிப்ரவரி பிப்ரவரி_மார்ச் மார்ச்_ஏப்ரல் ஏப்ரல்_மே மே_ஜூன் ஜூன்_ஜூலை ஜூலை_ஆகஸ்ட் ஆகஸ்ட்_செப்டெம்பர் செப்டெம்பர்_அக்டோபர் அக்டோபர்_நவம்பர் நவம்பர்_டிசம்பர் டிசம்பர்'.split('_'), i;
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
    ['dddd, MMMM Do YYYY, h:mm:ss a', 'ஞாயிற்றுக்கிழமை, பிப்ரவரி ௧௪வது ௨௦௧௦, ௩:௨௫:௫௦  எற்பாடு'],
    ['ddd, hA',                       'ஞாயிறு, ௩ எற்பாடு'],
    ['M Mo MM MMMM MMM',              '௨ ௨வது ௦௨ பிப்ரவரி பிப்ரவரி'],
    ['YYYY YY',                       '௨௦௧௦ ௧௦'],
    ['D Do DD',                       '௧௪ ௧௪வது ௧௪'],
    ['d do dddd ddd dd',              '௦ ௦வது ஞாயிற்றுக்கிழமை ஞாயிறு ஞா'],
    ['DDD DDDo DDDD',                 '௪௫ ௪௫வது ௦௪௫'],
    ['w wo ww',                       '௮ ௮வது ௦௮'],
    ['h hh',                          '௩ ௦௩'],
    ['H HH',                          '௧௫ ௧௫'],
    ['m mm',                          '௨௫ ௨௫'],
    ['s ss',                          '௫௦ ௫௦'],
    ['a A',                           ' எற்பாடு  எற்பாடு'],
    ['LTS',                           '௧௫:௨௫:௫௦'],
    ['L',                             '௧௪/௦௨/௨௦௧௦'],
    ['LL',                            '௧௪ பிப்ரவரி ௨௦௧௦'],
    ['LLL',                           '௧௪ பிப்ரவரி ௨௦௧௦, ௧௫:௨௫'],
    ['LLLL',                          'ஞாயிற்றுக்கிழமை, ௧௪ பிப்ரவரி ௨௦௧௦, ௧௫:௨௫'],
    ['l',                             '௧௪/௨/௨௦௧௦'],
    ['ll',                            '௧௪ பிப்ரவரி ௨௦௧௦'],
    ['lll',                           '௧௪ பிப்ரவரி ௨௦௧௦, ௧௫:௨௫'],
    ['llll',                          'ஞாயிறு, ௧௪ பிப்ரவரி ௨௦௧௦, ௧௫:௨௫']
  ],
  b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)), i;
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

test('meridiem invariant', function () {
  assert.equal(moment([2011, 2, 23,  2, 30]).format('a'), 'வைகறை', 'before dawn');
  assert.equal(moment([2011, 2, 23,  9, 30]).format('a'), 'காலை', 'morning');
  assert.equal(moment([2011, 2, 23, 14, 30]).format('a'), 'எற்பாடு', 'during day');
  assert.equal(moment([2011, 2, 23, 17, 30]).format('a'), 'எற்பாடு', 'evening');
  assert.equal(moment([2011, 2, 23, 19, 30]).format('a'), 'மாலை', 'late evening');
  // assert.equal(moment([2011, 2, 23, 23, 30]).format('a'), 'யாமம்', '(before) midnight'); -- should this be night?

  assert.equal(moment([2011, 2, 23,  2, 30]).format('A'), 'வைகறை', 'before dawn');
  assert.equal(moment([2011, 2, 23,  9, 30]).format('A'), 'காலை', 'morning');
  assert.equal(moment([2011, 2, 23, 14, 30]).format('A'), 'எற்பாடு', 'during day');
  assert.equal(moment([2011, 2, 23, 17, 30]).format('A'), 'எற்பாடு', 'evening');
  assert.equal(moment([2011, 2, 23, 19, 30]).format('A'), 'மாலை', 'late evening');
  // assert.equal(moment([2011, 2, 23, 23, 30]).format('a'), 'யாமம்', '(before) midnight'); -- should this be night?
});

test('format month', function () {
  var expected = 'ஜனவரி ஜனவரி_பிப்ரவரி பிப்ரவரி_மார்ச் மார்ச்_ஏப்ரல் ஏப்ரல்_மே மே_ஜூன் ஜூன்_ஜூலை ஜூலை_ஆகஸ்ட் ஆகஸ்ட்_செப்டெம்பர் செப்டெம்பர்_அக்டோபர் அக்டோபர்_நவம்பர் நவம்பர்_டிசம்பர் டிசம்பர்'.split('_'), i;
  for (i = 0; i < expected.length; i++) {
    assert.equal(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
  }
});

test('format week', function () {
  var expected = 'ஞாயிற்றுக்கிழமை ஞாயிறு ஞா_திங்கட்கிழமை திங்கள் தி_செவ்வாய்கிழமை செவ்வாய் செ_புதன்கிழமை புதன் பு_வியாழக்கிழமை வியாழன் வி_வெள்ளிக்கிழமை வெள்ளி வெ_சனிக்கிழமை சனி ச'.split('_'), i;
  for (i = 0; i < expected.length; i++) {
    assert.equal(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
  }
});

test('from', function () {
  var start = moment([2007, 1, 28]);
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 44}), true), 'ஒரு சில விநாடிகள்', '44 விநாடிகள் = ஒரு சில விநாடிகள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 45}), true), 'ஒரு நிமிடம்', '45 விநாடிகள் = ஒரு நிமிடம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 89}), true), 'ஒரு நிமிடம்', '89 விநாடிகள் = ஒரு நிமிடம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({s: 90}), true), '௨ நிமிடங்கள்', '90 விநாடிகள் = ௨ நிமிடங்கள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 44}), true), '௪௪ நிமிடங்கள்', '44 நிமிடங்கள் = 44 நிமிடங்கள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 45}), true), 'ஒரு மணி நேரம்', '45 நிமிடங்கள் = ஒரு மணி நேரம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 89}), true), 'ஒரு மணி நேரம்', '89 நிமிடங்கள் = ஒரு மணி நேரம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({m: 90}), true), '௨ மணி நேரம்', '90 நிமிடங்கள் = ௨ மணி நேரம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 5}), true), '௫ மணி நேரம்', '5 மணி நேரம் = 5 மணி நேரம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 21}), true), '௨௧ மணி நேரம்', '௨௧ மணி நேரம் = ௨௧ மணி நேரம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 22}), true), 'ஒரு நாள்', '௨௨ மணி நேரம் = ஒரு நாள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 35}), true), 'ஒரு நாள்', '௩5 மணி நேரம் = ஒரு நாள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({h: 36}), true), '௨ நாட்கள்', '௩6 மணி நேரம் = ௨ days');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 1}), true), 'ஒரு நாள்', '௧ நாள் = ஒரு நாள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 5}), true), '௫ நாட்கள்', '5 நாட்கள் = 5 நாட்கள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 25}), true), '௨௫ நாட்கள்', '௨5 நாட்கள் = ௨5 நாட்கள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 26}), true), 'ஒரு மாதம்', '௨6 நாட்கள் = ஒரு மாதம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 30}), true), 'ஒரு மாதம்', '௩0 நாட்கள் = ஒரு மாதம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 43}), true), 'ஒரு மாதம்', '45 நாட்கள் = ஒரு மாதம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 46}), true), '௨ மாதங்கள்', '46 நாட்கள் = ௨ மாதங்கள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 74}), true), '௨ மாதங்கள்', '75 நாட்கள் = ௨ மாதங்கள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 76}), true), '௩ மாதங்கள்', '76 நாட்கள் = ௩ மாதங்கள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 1}), true), 'ஒரு மாதம்', '௧ மாதம் = ஒரு மாதம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({M: 5}), true), '௫ மாதங்கள்', '5 மாதங்கள் = 5 மாதங்கள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 345}), true), 'ஒரு வருடம்', '௩45 நாட்கள் = ஒரு வருடம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({d: 548}), true), '௨ ஆண்டுகள்', '548 நாட்கள் = ௨ ஆண்டுகள்');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 1}), true), 'ஒரு வருடம்', '௧ வருடம் = ஒரு வருடம்');
    assert.equal(start.from(moment([2007, 1, 28]).add({y: 5}), true), '௫ ஆண்டுகள்', '5 ஆண்டுகள் = 5 ஆண்டுகள்');
});

test('suffix', function () {
  assert.equal(moment(30000).from(0), 'ஒரு சில விநாடிகள் இல்', 'prefix');
  assert.equal(moment(0).from(30000), 'ஒரு சில விநாடிகள் முன்', 'suffix');
});

test('now from now', function () {
  assert.equal(moment().fromNow(), 'ஒரு சில விநாடிகள் முன்', 'இப்போது இருந்து கடந்த காலத்தில் காட்ட வேண்டும்');
});

test('fromNow', function () {
  assert.equal(moment().add({s: 30}).fromNow(), 'ஒரு சில விநாடிகள் இல்', 'ஒரு சில விநாடிகள் இல்');
  assert.equal(moment().add({d: 5}).fromNow(), '௫ நாட்கள் இல்', '5 நாட்கள் இல்');
});

test('calendar day', function () {
  var a = moment().hours(12).minutes(0).seconds(0);

  assert.equal(moment(a).calendar(), 'இன்று ௧௨:௦௦', 'இன்று 12:00');
  assert.equal(moment(a).add({m: 25}).calendar(), 'இன்று ௧௨:௨௫', 'இன்று 12:25');
  assert.equal(moment(a).add({h: 1}).calendar(), 'இன்று ௧௩:௦௦', 'இன்று 13:00');
  assert.equal(moment(a).add({d: 1}).calendar(), 'நாளை ௧௨:௦௦', 'நாளை 12:00');
  assert.equal(moment(a).subtract({h: 1}).calendar(), 'இன்று ௧௧:௦௦', 'இன்று 11:00');
  assert.equal(moment(a).subtract({d: 1}).calendar(), 'நேற்று ௧௨:௦௦', 'நேற்று 12:00');
});

test('calendar next week', function () {
  var i, m;
  for (i = 2; i < 7; i++) {
    m = moment().add({d: i});
    assert.equal(m.calendar(), m.format('dddd, LT'), 'Today + ' + i + ' days current time');
    m.hours(0).minutes(0).seconds(0).milliseconds(0);
    assert.equal(m.calendar(), m.format('dddd, LT'), 'Today + ' + i + ' days beginning of day');
    m.hours(23).minutes(59).seconds(59).milliseconds(999);
    assert.equal(m.calendar(), m.format('dddd, LT'), 'Today + ' + i + ' days end of day');
  }
});

test('calendar last week', function () {
  var i, m;

  for (i = 2; i < 7; i++) {
    m = moment().subtract({d: i});
    assert.equal(m.calendar(), m.format('[கடந்த வாரம்] dddd, LT'),  'Today - ' + i + ' days current time');
    m.hours(0).minutes(0).seconds(0).milliseconds(0);
    assert.equal(m.calendar(), m.format('[கடந்த வாரம்] dddd, LT'),  'Today - ' + i + ' days beginning of day');
    m.hours(23).minutes(59).seconds(59).milliseconds(999);
    assert.equal(m.calendar(), m.format('[கடந்த வாரம்] dddd, LT'),  'Today - ' + i + ' days end of day');
  }
});

test('calendar all else', function () {
  var weeksAgo = moment().subtract({w: 1}), weeksFromNow = moment().add({w: 1});

  assert.equal(weeksAgo.calendar(), weeksAgo.format('L'), '1 week ago');
  assert.equal(weeksFromNow.calendar(), weeksFromNow.format('L'), 'in 1 week');

  weeksAgo = moment().subtract({w: 2});
  weeksFromNow = moment().add({w: 2});

  assert.equal(weeksAgo.calendar(), weeksAgo.format('L'), '2 weeks ago');
  assert.equal(weeksFromNow.calendar(), weeksFromNow.format('L'), 'in 2 weeks');
});

test('weeks year starting sunday', function () {
  assert.equal(moment([2012, 0, 1]).week(), 1, 'Jan 1 2012 should be week 1');
  assert.equal(moment([2012, 0, 7]).week(), 1, 'Jan 7 2012 should be week 1');
  assert.equal(moment([2012, 0, 8]).week(), 2, 'Jan 8 2012 should be week 2');
  assert.equal(moment([2012, 0, 14]).week(), 2, 'Jan 14 2012 should be week 2');
  assert.equal(moment([2012, 0, 15]).week(), 3, 'Jan 15 2012 should be week 3');
});

test('weeks year starting monday', function () {
  assert.equal(moment([2006, 11, 31]).week(), 1, 'Dec 31 2006 should be week 1');
  assert.equal(moment([2007, 0, 1]).week(), 1, 'Jan 1 2007 should be week 1');
  assert.equal(moment([2007, 0, 6]).week(), 1, 'Jan 6 2007 should be week 1');
  assert.equal(moment([2007, 0, 7]).week(), 2, 'Jan 7 2007 should be week 2');
  assert.equal(moment([2007, 0, 13]).week(), 2, 'Jan 13 2007 should be week 2');
  assert.equal(moment([2007, 0, 14]).week(), 3, 'Jan 14 2007 should be week 3');
});

test('weeks year starting tuesday', function () {
  assert.equal(moment([2007, 11, 29]).week(), 52, 'Dec 29 2007 should be week 52');
  assert.equal(moment([2008, 0, 1]).week(), 1, 'Jan 1 2008 should be week 1');
  assert.equal(moment([2008, 0, 5]).week(), 1, 'Jan 5 2008 should be week 1');
  assert.equal(moment([2008, 0, 6]).week(), 2, 'Jan 6 2008 should be week 2');
  assert.equal(moment([2008, 0, 12]).week(), 2, 'Jan 12 2008 should be week 2');
  assert.equal(moment([2008, 0, 13]).week(), 3, 'Jan 13 2008 should be week 3');
});

test('weeks year starting wednesday', function () {
  assert.equal(moment([2002, 11, 29]).week(), 1, 'Dec 29 2002 should be week 1');
  assert.equal(moment([2003, 0, 1]).week(), 1, 'Jan 1 2003 should be week 1');
  assert.equal(moment([2003, 0, 4]).week(), 1, 'Jan 4 2003 should be week 1');
  assert.equal(moment([2003, 0, 5]).week(), 2, 'Jan 5 2003 should be week 2');
  assert.equal(moment([2003, 0, 11]).week(), 2, 'Jan 11 2003 should be week 2');
  assert.equal(moment([2003, 0, 12]).week(), 3, 'Jan 12 2003 should be week 3');
});

test('weeks year starting thursday', function () {
  assert.equal(moment([2008, 11, 28]).week(), 1, 'Dec 28 2008 should be week 1');
  assert.equal(moment([2009, 0, 1]).week(), 1, 'Jan 1 2009 should be week 1');
  assert.equal(moment([2009, 0, 3]).week(), 1, 'Jan 3 2009 should be week 1');
  assert.equal(moment([2009, 0, 4]).week(), 2, 'Jan 4 2009 should be week 2');
  assert.equal(moment([2009, 0, 10]).week(), 2, 'Jan 10 2009 should be week 2');
  assert.equal(moment([2009, 0, 11]).week(), 3, 'Jan 11 2009 should be week 3');
});

test('weeks year starting friday', function () {
  assert.equal(moment([2009, 11, 27]).week(), 1, 'Dec 27 2009 should be week 1');
  assert.equal(moment([2010, 0, 1]).week(), 1, 'Jan 1 2010 should be week 1');
  assert.equal(moment([2010, 0, 2]).week(), 1, 'Jan 2 2010 should be week 1');
  assert.equal(moment([2010, 0, 3]).week(), 2, 'Jan 3 2010 should be week 2');
  assert.equal(moment([2010, 0, 9]).week(), 2, 'Jan 9 2010 should be week 2');
  assert.equal(moment([2010, 0, 10]).week(), 3, 'Jan 10 2010 should be week 3');
});

test('weeks year starting saturday', function () {
  assert.equal(moment([2010, 11, 26]).week(), 1, 'Dec 26 2010 should be week 1');
  assert.equal(moment([2011, 0, 1]).week(), 1, 'Jan 1 2011 should be week 1');
  assert.equal(moment([2011, 0, 2]).week(), 2, 'Jan 2 2011 should be week 2');
  assert.equal(moment([2011, 0, 8]).week(), 2, 'Jan 8 2011 should be week 2');
  assert.equal(moment([2011, 0, 9]).week(), 3, 'Jan 9 2011 should be week 3');
});

test('weeks year starting sunday formatted', function () {
  assert.equal(moment([2012, 0, 1]).format('w ww wo'), '1 01 1', 'Jan 1 2012 should be week 1');
  assert.equal(moment([2012, 0, 7]).format('w ww wo'), '1 01 1', 'Jan 7 2012 should be week 1');
  assert.equal(moment([2012, 0, 8]).format('w ww wo'), '2 02 2', 'Jan 8 2012 should be week 2');
  assert.equal(moment([2012, 0, 14]).format('w ww wo'), '2 02 2', 'Jan 14 2012 should be week 2');
  assert.equal(moment([2012, 0, 15]).format('w ww wo'), '3 03 3', 'Jan 15 2012 should be week 3');
});

test('lenient day of month ordinal parsing', function () {
  var i, ordinalStr, testMoment;
  for (i = 1; i <= 31; ++i) {
    ordinalStr = moment([2014, 0, i]).format('YYYY MM Do');
    testMoment = moment(ordinalStr, 'YYYY MM Do');
    assert.equal(testMoment.year(), 2014,
      'lenient day of month ordinal parsing ' + i + ' year check');
    assert.equal(testMoment.month(), 0,
      'lenient day of month ordinal parsing ' + i + ' month check');
    assert.equal(testMoment.date(), i,
      'lenient day of month ordinal parsing ' + i + ' date check');
  }
});

test('lenient day of month ordinal parsing of number', function () {
  var i, testMoment;
  for (i = 1; i <= 31; ++i) {
    testMoment = moment('2014 01 ' + i, 'YYYY MM Do');
    assert.equal(testMoment.year(), 2014,
      'lenient day of month ordinal parsing of number ' + i + ' year check');
    assert.equal(testMoment.month(), 0,
      'lenient day of month ordinal parsing of number ' + i + ' month check');
    assert.equal(testMoment.date(), i,
      'lenient day of month ordinal parsing of number ' + i + ' date check');
  }
});