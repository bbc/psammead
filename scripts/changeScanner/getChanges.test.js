const { exec } = require('shelljs');

jest.mock('shelljs', () => ({
  exec: jest.fn(),
}));

/* eslint-disable global-require */
describe(`changeScanner - getChanges`, () => {
  beforeEach(() => {
    exec.mockReturnValue({
      stdout: [
        'packages/components/foobar/index.js',
        'packages/components/foobar/index.test.js',
        'packages/components/barfoo/package.json',
        'packages/components/apples/dist/package.json',
        '',
      ].join('\n'),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns object mapping changed files to their package', () => {
    const getChanges = require('./getChanges');

    expect(getChanges()).toEqual({
      barfoo: ['package.json'],
      foobar: ['index.js', 'index.test.js'],
      apples: ['dist/package.json'],
    });

    expect(exec).toHaveBeenCalledTimes(2);

    expect(exec).toHaveBeenCalledWith('git fetch --all;', { silent: true });
    expect(exec).toHaveBeenCalledWith(
      'git diff --name-only origin/latest ./packages',
      { silent: true },
    );
  });
});
