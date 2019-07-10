/* eslint-disable global-require */
describe(`changeScanner - getChanges`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('returns object mapping changed files to their package', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: [
          'packages/components/foobar/index.js',
          'packages/components/foobar/index.test.js',
          'packages/components/barfoo/package.json',
          'packages/components/apples/dist/package.json',
        ].join('\n'),
      }),
    }));

    const getChanges = require('./getChanges');

    expect(getChanges()).toEqual({
      barfoo: ['package.json'],
      foobar: ['index.js', 'index.test.js'],
      apples: ['dist/package.json'],
    });
  });
});
