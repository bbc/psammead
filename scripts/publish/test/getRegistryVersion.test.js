const shelljs = require('shelljs');
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

    expect(getRegistry('gel-methods')).toEqual('1.1.1');
  });

  it('returns single registry version ', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: JSON.stringify(['1.3.2']),
      }),
    }));

    const getRegistry = require('../src/getRegistryVersion');

    expect(getRegistry('psammead-caption')).toEqual('1.3.2');
  });

  it('returns default version when an array of versions is not returned', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({}),
    }));

    const getRegistry = require('../src/getRegistryVersion');

    expect(getRegistry('psammead-front-end-component')).toEqual('0.0.0');
  });

  it('returns -1 if the package does not match the whitelist', () => {
    jest.mock('shelljs', () => ({
      exec: () => ({
        stdout: JSON.stringify(['1.0.0', '1.1.0', '1.1.1']),
      }),
    }));

    const getRegistry = require('../src/getRegistryVersion');

    expect(getRegistry('fo^£ob/.ar')).toEqual('-1');
  });

  // Example name = 'psammead versions -json; echo I can inject code here; npm view psammead'
  // npm view psammead versions -json; echo I can inject code here; npm view psammead  versions -json
  it('should block the execution of exec if not in whiteliest ', () => {
    const shell = jest.spyOn(shelljs, 'exec');

    const getRegistry = require('../src/getRegistryVersion');

    expect(
      getRegistry(
        'psammead versions -json; echo I can inject code here; npm view psammead;',
      ),
    ).toEqual('-1');
    expect(shell).toHaveBeenCalledTimes(0);
  });
});
