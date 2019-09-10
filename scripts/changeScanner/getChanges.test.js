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
        'packages/containers/foo-bar/dist/package.json',
        'packages/utilities/bar-foo/dist/package.json',
        'scripts/getChanges.js',
        'scripts/changeScanner/index.js',
        'psammead/packages/components/README.md',
        'packages/components/README.md',
        'packages/README.md',
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
      'foo-bar': ['dist/package.json'],
      'bar-foo': ['dist/package.json'],
      psammead: [
        'scripts/getChanges.js',
        'scripts/changeScanner/index.js',
        'psammead/packages/components/README.md',
        'packages/components/README.md',
        'packages/README.md',
      ],
    });

    expect(exec).toHaveBeenCalledTimes(2);

    expect(exec).toHaveBeenCalledWith('git fetch --all;', { silent: true });
    expect(exec).toHaveBeenCalledWith('git diff --name-only origin/latest', {
      silent: true,
    });
  });
});
