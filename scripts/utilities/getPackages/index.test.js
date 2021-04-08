/* eslint-disable global-require */
describe(`Publish Script - getPackages`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should return array of all package's paths", () => {
    jest.mock('shelljs', () => ({
      exec: () =>
        JSON.stringify({
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
    }));

    const getPackages = require('.');
    const actual = getPackages();
    const expected = [
      'packages/components/psammead-amp-geo',
      'packages/components/psammead-brand',
      'packages/components/psammead-bulleted-list',
    ];
    expect(actual).toEqual(expected);
  });

  it('returns 2 packages', () => {
    jest.mock('shelljs', () => ({
      exec: () =>
        JSON.stringify({
          'package-1': {
            location: 'packages/components/package-1',
          },
          'package-2': {
            location: 'packages/components/package-2',
          },
        }),
    }));

    const getPackages = require('.');
    expect(getPackages()).toEqual([
      'packages/components/package-1',
      'packages/components/package-2',
    ]);
  });

  it('returns 1 package', () => {
    jest.mock('shelljs', () => ({
      exec: () =>
        JSON.stringify({
          'package-1': {
            location: 'packages/components/package-1',
          },
        }),
    }));

    const getPackages = require('.');
    expect(getPackages()).toEqual(['packages/components/package-1']);
  });

  it('returns packages anc handles shelljs output that has a data property (typically when running executing code locally)', () => {
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
      'packages/components/package-1',
      'packages/components/package-2',
    ]);
  });
});
