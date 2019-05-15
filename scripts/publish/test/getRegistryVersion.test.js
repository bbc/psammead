/* eslint-disable global-require */
describe(`Publish Script - getRegistry`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('returns latest registry version from array', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: JSON.stringify(['1.0.0', '1.1.0', '1.1.1']),
      }),
    }));

    const getRegistry = require('../src/getRegistryVersion');

    expect(getRegistry('foobar')).toEqual('1.1.1');
  });

  it('returns single registry version ', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: JSON.stringify(['1.3.2']),
      }),
    }));

    const getRegistry = require('../src/getRegistryVersion');

    expect(getRegistry('foobar')).toEqual('1.3.2');
  });

  it('returns default version when an array of versions is not returned', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({}),
    }));

    const getRegistry = require('../src/getRegistryVersion');

    expect(getRegistry('foobar')).toEqual('0.0.0');
  });
});
