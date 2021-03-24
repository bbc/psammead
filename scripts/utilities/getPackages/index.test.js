/* eslint-disable global-require */
describe(`Publish Script - getPackages`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should return array of all package's paths", () => {
    jest.mock('shelljs', () => ({
      exec: () =>
        JSON.stringify({
          data: JSON.stringify({
            '@bbc/psammead-amp-geo': {
              location: 'packages/components/psammead-amp-geo',
            },
            '@bbc/psammead-brand': {
              location: 'packages/components/psammead-brand',
            },
            '@bbc/psammead-bulleted-list': {
              location: 'packages/components/psammead-bulleted-list',
            },
          }),
        }),
    }));

    const getPackages = require('.');
    const actual = getPackages();
    const expected = [
      'psammead',
      'packages/components/psammead-amp-geo',
      'packages/components/psammead-brand',
      'packages/components/psammead-bulleted-list',
    ];
    expect(actual).toEqual(expected);
  });

  it('returns array of packages with the root package and two other packages found', () => {
    jest.mock('shelljs', () => ({
      exec: () =>
        JSON.stringify({
          data: JSON.stringify({
            'package-1': {
              location: 'packages/components/package-1',
            },
            'package-2': {
              location: 'packages/components/package-2',
            },
          }),
        }),
    }));

    const getPackages = require('.');
    expect(getPackages()).toEqual([
      'psammead',
      'packages/components/package-1',
      'packages/components/package-2',
    ]);
  });

  it('returns array of packages with the root package and one other package found', () => {
    jest.mock('shelljs', () => ({
      exec: () =>
        JSON.stringify({
          data: JSON.stringify({
            'package-1': {
              location: 'packages/components/package-1',
            },
          }),
        }),
    }));

    const getPackages = require('.');
    expect(getPackages()).toEqual([
      'psammead',
      'packages/components/package-1',
    ]);
  });

  it('returns only root package when no other packages are found', () => {
    jest.mock('shelljs', () => ({
      exec: () => '{"data":"{}"}',
    }));

    const getPackages = require('.');
    expect(getPackages()).toEqual(['psammead']);
  });
});
