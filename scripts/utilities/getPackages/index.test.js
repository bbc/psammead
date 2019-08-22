/* eslint-disable global-require */
describe(`Publish Script - getPackages`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should return array of all package's paths", () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: `/psammead/packages/components/psammead-brand\n/psammead/packages/components/psammead-image`,
      }),
    }));

    const getPackages = require('.');
    const actual = getPackages();
    const expected = [
      '/psammead',
      '/psammead/packages/components/psammead-brand',
      '/psammead/packages/components/psammead-image',
    ];
    expect(actual).toEqual(expected);
  });

  it('returns array of packages with the root package and two other packages found', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout:
          '/foobar/directory/packages/package1\n/foobar/directory/packages/package2',
      }),
    }));

    const getPackages = require('.');
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

    const getPackages = require('.');
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

    const getPackages = require('.');
    expect(getPackages()).toEqual([]);
  });
});
