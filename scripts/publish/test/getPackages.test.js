/* eslint-disable global-require */
describe(`Publish Script - getPackages`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('returns array of packages with two packages found', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '/foobar/directory/package1\n/foobar/directory/package2',
      }),
    }));

    const getPackages = require('../src/getPackages');

    expect(getPackages()).toEqual([
      '/foobar/directory/package1',
      '/foobar/directory/package2',
    ]);
  });

  it('returns array of packages with one packages found', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '/foobar/directory/package1',
      }),
    }));

    const getPackages = require('../src/getPackages');

    expect(getPackages()).toEqual(['/foobar/directory/package1']);
  });

  it('returns empty array when no packages are found', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '\n', // This is the real response if none are found
      }),
    }));

    const getPackages = require('../src/getPackages');

    expect(getPackages()).toEqual([]);
  });
});
