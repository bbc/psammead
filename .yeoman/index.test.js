const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const shell = require('shelljs');

const componentGenerator = path.join(__dirname, '.');
const tempDir = path.join(__dirname, './temp');
const componentDir = './temp/packages/components/psammead-foo-bar-component';
const prompts = {
  name: 'foo-bar-component',
  description: 'This is a test',
  authorName: 'foo bar',
  authorEmail: 'foobar@foobar.com',
};
const tempFiles = [
  `${componentDir}/README.md`,
  `${componentDir}/package.json`,
  `${componentDir}/CHANGELOG.md`,
  `${componentDir}/src/index.jsx`,
  `${componentDir}/src/index.stories.jsx`,
  `${componentDir}/src/index.test.jsx`,
];

describe('pacakge generator', () => {
  afterEach(() => {
    shell.rm('-rf', tempDir);
  });

  it('should generate pacakge with prompts', async () => {
    return helpers
      .run(componentGenerator)
      .inDir(tempDir)
      .withPrompts(prompts)
      .then(() => {
        let expectedFiles = [];
        tempFiles.map(file => {
          expectedFiles.push(path.join(__dirname, file));
        });
        console.log('testing push');

        assert.file(expectedFiles);
        assert.fileContent(
          expectedFiles[3],
          "import React from 'react';\n\nconst FooBarComponent = () => <h1>Hello World</h1>;\n\nexport default FooBarComponent;",
        );
      });
  }, 30000);
});
