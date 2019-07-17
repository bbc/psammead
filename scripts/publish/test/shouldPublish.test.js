/* eslint-disable global-require */
describe(`Publish Script - shouldPublish`, () => {
  it('should be truthy when local version is greater than registry', async () => {
    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
    };

    const result = await shouldPublish(packageJson, '2.1.0');
    expect(result).toBeTruthy();
  });

  it('should be falsy when local version is smaller than registry', async () => {
    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '0.1.2',
    };

    const result = await shouldPublish(packageJson, '2.1.1');
    expect(result).toBeFalsy();
  });

  it('should be falsy when private is true', async () => {
    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
      private: true,
    };

    const result = await shouldPublish(packageJson, '2.1.1');
    expect(result).toBeFalsy();
  });

  it('should be truthy when private is false', async () => {
    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
      private: false,
    };
    const result = await shouldPublish(packageJson, '2.1.1');
    expect(result).toBeTruthy();
  });
});
