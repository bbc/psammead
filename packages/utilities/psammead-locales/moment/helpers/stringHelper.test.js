/* eslint-disable func-names */
var stringHelper = require('./stringHelper');

var assert = {
  equal: function(val1, val2) {
    return expect(val1).toEqual(val2);
  },
};

test('the replacement of Western Numerals with Eastern ones', function() {
  assert.equal(stringHelper.useEasternNumerals('11 بهمن 1397'), '۱۱ بهمن ۱۳۹۷');
});
