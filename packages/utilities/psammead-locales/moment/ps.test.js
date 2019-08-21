/* eslint-disable */
const moment = require('moment');

require('./ps');

moment.locale('ps');
const assert = { equal: (val1, val2) => expect(val1).toEqual(val2) };

test('parse', function() {
  const testMonths = 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split(
    '_',
  );
  const shortMonths = 'جنوري_فبروري_مارچ_اپریل_می_جون_جولاې_اګست_سپتمبر_اکتوبر_نومبر_ډیسمبر'.split(
    '_',
  );

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
