/* eslint-disable global-require */
describe(`Publish Script - getPackages`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('returns registry version with newline in response', () => {
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

  it('returns registry version with newline in response', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '/foobar/directory/package1',
      }),
    }));

    const getPackages = require('../src/getPackages');

    expect(getPackages()).toEqual(['/foobar/directory/package1']);
  });

  it('returns registry version with newline in response', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({}),
    }));

    const getPackages = require('../src/getPackages');

    expect(getPackages()).toEqual([]);
  });
});
