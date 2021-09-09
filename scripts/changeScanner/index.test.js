/* eslint-disable global-require */
const stripAnsi = require('strip-ansi');

const consoleLogOutput = jest.fn();
const consoleErrorOutput = jest.fn();
const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
jest
  .spyOn(global.console, 'log')
  .mockImplementation((...args) => consoleLogOutput(stripAnsi(...args)));
jest
  .spyOn(global.console, 'error')
  .mockImplementation((...args) => consoleErrorOutput(stripAnsi(...args)));

describe(`changeScanner - index`, () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('returns success messaging when no further changes required', () => {
    jest.mock('./getChanges', () => () => ({
      barfoo: ['package.json', 'yarn.lock', 'CHANGELOG.md'],
    }));
    jest.mock('fs', () => ({
      readFileSync: () => '{"dependencies":{"package-a":"1.0.0"}}',
    }));
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '{"dependencies":{"package-a":"1.0.0"}}',
      }),
    }));

    require('./index');

    expect(mockExit).not.toHaveBeenCalled();
    expect(consoleErrorOutput).not.toHaveBeenCalled();
    expect(consoleLogOutput).toHaveBeenCalledTimes(1);
    expect(consoleLogOutput).toHaveBeenCalledWith(
      'All packages have met minimum change requirements 🎉',
    );
  });

  it('returns success messaging when no changes made', () => {
    jest.mock('./getChanges', () => () => ({}));

    require('./index');

    expect(mockExit).not.toHaveBeenCalled();
    expect(consoleErrorOutput).not.toHaveBeenCalled();
    expect(consoleLogOutput).toHaveBeenCalledTimes(1);
    expect(consoleLogOutput).toHaveBeenCalledWith(
      'All packages have met minimum change requirements 🎉',
    );
  });

  it('returns detailed error messaging when further changes required', () => {
    jest.mock('fs', () => ({
      readFileSync: () => '{"dependencies":{"package-a":"2.0.0"}}',
    }));
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '{"dependencies":{"package-a":"1.0.0"}}',
      }),
    }));

    jest.mock('./getChanges', () => () => ({
      barfoo: ['package.json'],
      pears: ['package.json', 'yarn.lock', 'CHANGELOG.md'],
      foobar: ['index.js', 'index.test.js'],
      apples: ['dist/package.json'],
    }));

    require('./index');

    expect(mockExit).toHaveBeenCalled();

    const expectedMessages = [
      [
        'Please update the version number and CHANGELOG for every package that is being',
        'changed in this branch. The following problems were found:',
      ]
        .join('\n')
        .concat('\n'),
      [
        'Branch must update CHANGELOG.md in barfoo',
        'Branch must update CHANGELOG.md in foobar',
        'Branch must update package.json in foobar',
        'Branch must update CHANGELOG.md in apples',
      ]
        .join('\n')
        .concat('\n'),
    ];

    expectedMessages.forEach(msg =>
      expect(consoleErrorOutput).toHaveBeenCalledWith(msg),
    );
  });
});
