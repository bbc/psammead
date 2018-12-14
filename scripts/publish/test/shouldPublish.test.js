/* eslint-disable global-require */
describe(`Publish Script - shouldPublish`, () => {
  it('should be truthy when local version is greater than registry', () => {
    jest.doMock('../src/getRegistryVersion', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
    };

    expect(shouldPublish(packageJson)).toBeTruthy();
  });

  it('should be falsy when local version is greater than registry', () => {
    jest.doMock('../src/getRegistryVersion', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '0.1.2',
    };

    expect(shouldPublish(packageJson)).toBeFalsy();
  });

  it('should be falsy when private is true', () => {
    jest.doMock('../src/getRegistryVersion', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
      private: true,
    };

    expect(shouldPublish(packageJson)).toBeFalsy();
  });

  it('should be truthy when private is false', () => {
    jest.doMock('../src/getRegistryVersion', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
      private: false,
    };

    expect(shouldPublish(packageJson)).toBeTruthy();
  });
});
