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

const tempFiles = [
  './temp/packages/components/psammead-foo-bar-component/README.md',
  './temp/packages/components/psammead-foo-bar-component/package.json',
  './temp/packages/components/psammead-foo-bar-component/CHANGELOG.md',
  './temp/packages/components/psammead-foo-bar-component/src/index.jsx',
  './temp/packages/components/psammead-foo-bar-component/src/index.stories.jsx',
  './temp/packages/components/psammead-foo-bar-component/src/index.test.jsx',
];

describe('pacakge generator', () => {
  beforeEach(() => {
    jest.setTimeout(12000);

    return helpers
      .run(path.join(__dirname, '.'))
      .inDir(path.join(__dirname, './temp'))
      .withPrompts(prompts);
  });
  afterEach(() => {
    shell.rm('-rf', path.join(__dirname, './temp'));
  });

  it('should generate pacakge with prompts', () => {
    let expectedFiles = [];
    tempFiles.map(file => {
      expectedFiles.push(path.join(__dirname, file));
    });

    assert.file(expectedFiles);
    assert.fileContent(
      expectedFiles[3],
      "import React from 'react';\n\nconst FooBarComponent = () => <h1>Hello World</h1>;\n\nexport default FooBarComponent;",
    );
  });
});
