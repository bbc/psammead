const RegClient = require('npm-registry-client');

jest.mock(
  'npm-registry-client',
  () =>
    class {
      // eslint-disable-next-line class-methods-use-this
      get(uri, opts, cb) {
        cb(null, '1.1.1');
      }
    },
);

/* eslint-disable global-require */
describe(`Publish Script - getRegistry`, () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('returns latest registry version from array', async () => {
    const getRegistry = require('../src/getRegistryVersion');
    const result = await getRegistry('gel-methods');
    expect(result).toEqual('1.1.1');
  });

  it('throws if the package does not match the whitelist', async () => {
    jest.resetModules();
    const getRegistry = require('../src/getRegistryVersion');
    await expect(getRegistry('foobar')).rejects.toMatch('Wrong package name');
  });

  // Example name = 'psammead versions -json; echo I can inject code here; npm view psammead'
  // npm view psammead versions -json; echo I can inject code here; npm view psammead  versions -json
  it('should block the execution of exec if not in whiteliest ', async () => {
    jest.resetModules();
    const shell = jest.spyOn(RegClient.prototype, 'get');
    const getRegistry = require('../src/getRegistryVersion');
    await expect(
      getRegistry(
        'psammead versions -json; echo I can inject code here; npm view psammead;',
      ),
    ).rejects.toMatch('Wrong package name');
    await expect(shell).toHaveBeenCalledTimes(0);
  });
});
