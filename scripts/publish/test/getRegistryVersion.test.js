/* eslint-disable global-require */
describe(`Publish Script - getRegistry`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('returns registry version with newline in response', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '1.3.2\n ',
      }),
    }));

    const getRegistry = require('../src/getRegistryVersion');

    expect(getRegistry('foobar')).toEqual('1.3.2');
  });

  it('returns registry version without newline in response', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: '3.2.1',
      }),
    }));

    const getRegistry = require('../src/getRegistryVersion');

    expect(getRegistry('foobar')).toEqual('3.2.1');
  });

  it('returns default version when there is no output', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({}),
    }));

    const getRegistry = require('../src/getRegistryVersion');

    expect(getRegistry('foobar')).toEqual('0.0.0');
  });
});
