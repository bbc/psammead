/* eslint-disable global-require */
describe(`Publish Script - shouldPublish`, () => {
  it('should be truthy when local version is greater than registry', () => {
    jest.doMock('../src/getRegistry', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
    };

    expect(shouldPublish(packageJson)).toBeTruthy();
  });

  it('should be falsy when local version is greater than registry', () => {
    jest.doMock('../src/getRegistry', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '0.1.2',
    };

    expect(shouldPublish(packageJson)).toBeFalsy();
  });

  it('should be falsy when publish is false', () => {
    jest.doMock('../src/getRegistry', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
      publish: 'false',
    };

    expect(shouldPublish(packageJson)).toBeFalsy();
  });

  it('should be truthy when publish is foobar', () => {
    jest.doMock('../src/getRegistry', () => jest.fn(() => '1.2.2'));

    const shouldPublish = require('../src/shouldPublish');

    const packageJson = {
      version: '2.1.2',
      publish: 'foobar',
    };

    expect(shouldPublish(packageJson)).toBeTruthy();
  });
});
