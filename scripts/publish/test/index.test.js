/* eslint-disable global-require */
/* eslint-disable no-console */
const stripAnsi = require('strip-ansi');

const getSuccessfulShellJsMock = () => {
  jest.mock('shelljs', () => ({
    exec: jest.fn(cmd => {
      if (cmd === 'yarn workspaces list --json') {
        return {
          stdout: '{"location":"/foo/bar","name":"psammead-foobar"}',
        };
      }

      return { code: 0 };
    }),
  }));

  return require('shelljs');
};

const getFailingShellJsMock = () => {
  jest.mock('shelljs', () => ({
    exec: jest.fn(cmd => {
      if (cmd === 'yarn workspaces list --json') {
        return {
          stdout: '{"location":"/foo/bar","name":"psammead-foobar"}',
        };
      }

      return { code: 1 };
    }),
  }));

  return require('shelljs');
};

const getFsMock = () => {
  jest.mock('fs', () => ({
    readFileSync: jest.fn(() => {
      return JSON.stringify({
        name: '@foo/psammead-foobar',
        version: '0.1.2',
      });
    }),
    appendFileSync: jest.fn(),
  }));

  return require('fs');
};

jest.mock('../src/report');

describe(`Publish Script - publish`, () => {
  beforeEach(() => {
    jest.resetModules();
    console.log = jest.fn();
  });

  it('runs correct publish command and publish is successful ', () => {
    const shelljs = getSuccessfulShellJsMock();
    const fs = getFsMock();
    require('../');

    expect(
      shelljs.exec,
    ).toHaveBeenLastCalledWith(
      'npm publish /foo/bar --access public --tag latest',
      { silent: true },
    );

    const expectedOutput = [
      'Publishing @foo/psammead-foobar',
      'Successfully published @foo/psammead-foobar',
    ];

    expectedOutput.forEach((element, index) => {
      expect(stripAnsi(console.log.mock.calls[index][0])).toEqual(
        expect.stringContaining(element),
      );
    });

    expect(fs.readFileSync).not.toHaveBeenCalledWith('./psammead/package.json');
    expect(fs.readFileSync).not.toHaveBeenCalledWith('./package.json');
    expect(fs.appendFileSync).toHaveBeenCalledTimes(1);
    expect(fs.appendFileSync).toHaveBeenCalledWith(
      'published.txt',
      '@foo/psammead-foobar,',
    );
  });

  it('runs correct publish command and publish is unsuccessful ', () => {
    const shelljs = getFailingShellJsMock();
    const fs = getFsMock();

    require('../');

    expect(
      shelljs.exec,
    ).toHaveBeenCalledWith(
      'npm publish /foo/bar --access public --tag latest',
      { silent: true },
    );

    const expectedOutput = [
      'Publishing @foo/psammead-foobar',
      'Error publishing @foo/psammead-foobar@0.1.2',
    ];

    expectedOutput.forEach((element, index) => {
      expect(stripAnsi(console.log.mock.calls[index][0])).toEqual(
        expect.stringContaining(element),
      );
    });

    expect(fs.appendFileSync).not.toHaveBeenCalled();
  });
});
