/* eslint-disable global-require */
describe(`Publish Script - shouldPublish`, async () => {
  it('should be truthy when local version is greater than registry', async () => {
    jest.doMock('../src/getRegistryVersion', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
    };

    return expect(shouldPublish(packageJson)).resolves.toBeTruthy();
  });

  it('should be falsy when local version is greater than registry', async () => {
    jest.doMock('../src/getRegistryVersion', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '0.1.2',
    };

    return shouldPublish(packageJson).then(data => {
      expect(data).toBeFalsy();
    });
  });

  it('should be falsy when private is true', async () => {
    jest.doMock('../src/getRegistryVersion', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
      private: true,
    };

    return shouldPublish(packageJson).then(data => {
      expect(data).toBeFalsy();
    });
  });

  it('should be truthy when private is false', async () => {
    jest.doMock('../src/getRegistryVersion', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
      private: false,
    };
    return shouldPublish(packageJson).then(data => {
      expect(data).toBeTruthy();
    });
  });
});
