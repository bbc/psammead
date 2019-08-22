const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const shell = require('shelljs');

const prompts = {
  name: 'foo-bar-component',
  description: 'This is a test',
  authorName: 'foo bar',
  authorEmail: 'foobar@foobar.com',
};

describe('pacakge generator', () => {
  beforeEach(() => {
    jest.setTimeout(30000);

    return helpers
      .run(path.join(__dirname, '.'))
      .inDir(path.join(__dirname, './temp'))
      .withPrompts(prompts);
  });
  afterEach(() => {
    shell.rm('-rf', path.join(__dirname, './temp'));
  });

  it('should generate pacakge with prompts', () => {
    assert.file([
      path.join(
        __dirname,
        './temp/packages/components/psammead-foo-bar-component/README.md',
      ),
      path.join(
        __dirname,
        './temp/packages/components/psammead-foo-bar-component/package.json',
      ),
    ]);
  });
});
