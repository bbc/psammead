const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const shell = require('shelljs');

const componentGenerator = path.join(__dirname, '.');
const tempDir = path.join(__dirname, './temp');

const prompts = {
  name: 'foo-bar-component',
  description: 'This is a test',
  authorName: 'foo bar',
  authorEmail: 'foobar@foobar.com',
};

const expectedFiles = [
  `${tempDir}/packages/components/psammead-foo-bar-component/README.md`,
  `${tempDir}/packages/components/psammead-foo-bar-component/package.json`,
  `${tempDir}/packages/components/psammead-foo-bar-component/CHANGELOG.md`,
  `${tempDir}/packages/components/psammead-foo-bar-component/src/index.jsx`,
  `${tempDir}/packages/components/psammead-foo-bar-component/src/index.stories.jsx`,
  `${tempDir}/packages/components/psammead-foo-bar-component/src/index.test.jsx`,
];

describe('pacakge generator', () => {
  afterEach(() => {
    shell.rm('-rf', tempDir);
  });

  it('should generate pacakge with prompts', () => {
    return helpers
      .run(componentGenerator)
      .inDir(tempDir)
      .withPrompts(prompts)
      .then(() => {
        shell.exec(`ls -R ${__dirname}`);
        assert.file(expectedFiles);
        assert.fileContent(
          expectedFiles[3],
          "import React from 'react';\n\nconst FooBarComponent = () => <h1>Hello World</h1>;\n\nexport default FooBarComponent;",
        );
      });
  }, 50000);
});
