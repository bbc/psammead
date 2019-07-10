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
      barfoo: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
    }));

    require('./index');

    expect(mockExit).not.toHaveBeenCalled();
    expect(consoleErrorOutput).not.toHaveBeenCalled();
    expect(consoleLogOutput).toHaveBeenCalledTimes(1);
    expect(consoleLogOutput).toHaveBeenCalledWith(
      'All packages have met minmum change requirements 🎉',
    );
  });

  it('returns success messaging when no changes made', () => {
    jest.mock('./getChanges', () => () => ({}));

    require('./index');

    expect(mockExit).not.toHaveBeenCalled();
    expect(consoleErrorOutput).not.toHaveBeenCalled();
    expect(consoleLogOutput).toHaveBeenCalledTimes(1);
    expect(consoleLogOutput).toHaveBeenCalledWith(
      'All packages have met minmum change requirements 🎉',
    );
  });

  it('returns detailed error messaging when further changes required', () => {
    jest.mock('./getChanges', () => () => ({
      barfoo: ['package.json'],
      pears: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      foobar: ['index.js', 'index.test.js'],
      apples: ['dist/package.json'],
    }));

    require('./index');

    expect(mockExit).toHaveBeenCalled();

    const expectedMessages = [
      'Must change CHANGELOG.md in barfoo',
      'Must change package-lock.json in barfoo',
      'Must change CHANGELOG.md in foobar',
      'Must change package-lock.json in foobar',
      'Must change package.json in foobar',
      'Must change CHANGELOG.md in apples',
      'Must change package-lock.json in apples',
      'Must change package.json in apples',
    ];

    expect(consoleLogOutput).not.toHaveBeenCalled();

    expect(consoleErrorOutput).toHaveBeenCalledTimes(expectedMessages.length);

    expectedMessages.forEach(msg =>
      expect(consoleErrorOutput).toHaveBeenCalledWith(msg),
    );
  });
});
