const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const fs = require('fs');
const path = require('path');

describe('generator', () => {
  beforeEach(() => {
    return helpers
      .run('.')
      .inTmpDir(function(dir) {
        var done = this.async(); // `this` is the RunContext object.
        this.fs.copy(path.join(__dirname, '../templates/common'), dir, done);
      })
      .withPrompts({ name: 'test-name', description: 'I am a description' });
  });

  it('generates a project', function() {
    assert.file(path.join(__dirname, 'tmp/test-name/index.jsx'));
  });
});
