/* eslint-disable global-require */
describe(`Publish Script - getPackages`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('returns array of packages with the root package and two other packages found', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout:
          '/foobar/directory/packages/package1\n/foobar/directory/packages/package2',
      }),
    }));

    const getPackages = require('../../utilities/getPackages');

    expect(getPackages()).toEqual([
      '/foobar/directory',
      '/foobar/directory/packages/package1',
      '/foobar/directory/packages/package2',
    ]);
  });

  it('returns array of packages with the root package and one other package found', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '/foobar/directory/packages/package1',
      }),
    }));

    const getPackages = require('../../utilities/getPackages');

    expect(getPackages()).toEqual([
      '/foobar/directory',
      '/foobar/directory/packages/package1',
    ]);
  });

  it('returns empty array when no packages are found', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '\n', // This is the real response if none are found
      }),
    }));

    const getPackages = require('../../utilities/getPackages');

    expect(getPackages()).toEqual([]);
  });
});
