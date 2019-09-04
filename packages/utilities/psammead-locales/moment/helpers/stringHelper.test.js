/* eslint-disable func-names */
const stringHelper = require('./stringHelper');

const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };

test('the replacement of Western Numerals with Eastern ones', function() {
  assert.equal(stringHelper.useEasternNumerals('11 بهمن 1397'), '۱۱ بهمن ۱۳۹۷');
});
