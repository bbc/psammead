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
    jest.mock('./getChanges', () => () => ({
      barfoo: ['package.json'],
      pears: ['package.json', 'yarn.lock', 'CHANGELOG.md'],
      foobar: ['index.js', 'index.test.js'],
      apples: ['dist/package.json'],
    }));

    require('./index');

    expect(mockExit).toHaveBeenCalled();

    const expectedMessages = [
      'Branch must update CHANGELOG.md in barfoo',
      'Branch must update yarn.lock in barfoo',
      'Branch must update CHANGELOG.md in foobar',
      'Branch must update yarn.lock in foobar',
      'Branch must update package.json in foobar',
      'Branch must update CHANGELOG.md in apples',
      'Branch must update yarn.lock in apples',
      'Branch must update package.json in apples',
      '', // empty line for spacing
    ];

    expect(consoleErrorOutput).toHaveBeenCalledTimes(
      expectedMessages.length + 1,
    );

    expect(consoleErrorOutput).toHaveBeenCalledWith(
      expect.stringContaining('Please update the version number'),
    );

    expectedMessages.forEach(msg =>
      expect(consoleErrorOutput).toHaveBeenCalledWith(msg),
    );
  });
});
