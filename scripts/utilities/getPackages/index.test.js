/* eslint-disable global-require */
describe(`Publish Script - getPackages`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should return array of all package's paths", () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: [
          '{"location":"packages/components/psammead-consent-banner","name":"@bbc/psammead-consent-banner"}',
          '{"location":"packages/components/psammead-brand","name":"@bbc/psammead-brand"}',
          '{"location":"packages/components/psammead-bulleted-list","name":"@bbc/psammead-bulleted-list"}',
        ].join('\n'),
      }),
    }));

    const getPackages = require('.');
    const actual = getPackages();
    const expected = [
      {
        location: 'packages/components/psammead-consent-banner',
        name: '@bbc/psammead-consent-banner',
      },
      {
        location: 'packages/components/psammead-brand',
        name: '@bbc/psammead-brand',
      },
      {
        location: 'packages/components/psammead-bulleted-list',
        name: '@bbc/psammead-bulleted-list',
      },
    ];
    expect(actual).toEqual(expected);
  });

  it('returns 2 packages', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: [
          '{"location":"packages/components/package-1","name":"package-1"}',
          '{"location":"packages/components/package-2","name":"package-2"}',
        ].join('\n'),
      }),
    }));

    const getPackages = require('.');
    expect(getPackages()).toEqual([
      {
        location: 'packages/components/package-1',
        name: 'package-1',
      },
      {
        location: 'packages/components/package-2',
        name: 'package-2',
      },
    ]);
  });

  it('returns 1 package', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: [
          '{"location":"packages/components/package-1","name":"package-1"}',
        ].join('\n'),
      }),
    }));

    const getPackages = require('.');
    expect(getPackages()).toEqual([
      {
        location: 'packages/components/package-1',
        name: 'package-1',
      },
    ]);
  });
});
