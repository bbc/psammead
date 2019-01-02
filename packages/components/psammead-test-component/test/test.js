const assert = require('assert'); // to-do: allow es6 import
const arr = require('../src/index');

describe('the pets array', () => {
  it('should have "cats" as its first element', () => {
    assert.equal(arr.indexOf('cats'), 0);
  });
});
