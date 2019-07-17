const RegClient = require('npm-registry-client');
const getRegistry = require('../src/getRegistryVersion');

// jest.mock('npm-registry-client');

// jest.mock('npm-registry-client', () => () => ({
//   RegClient: {
//     get: jest.fn((x, y) => ['1.0.0', '1.1.0', '1.1.1']),
//   },
// }));

jest.mock(
  'npm-registry-client',
  () =>
    class {
      // eslint-disable-next-line class-methods-use-this
      get() {
        return ['1.0.0', '1.1.0', '1.1.1'];
      }
    },
);

/* eslint-disable global-require */
describe(`Publish Script - getRegistry`, () => {
  beforeEach(async () => {
    // jest.resetModules();
  });

  it('returns latest registry version from array', async () => {
    const result = await getRegistry('gel-methods');
    expect(result).toEqual('1.1.1');
  });

  it('returns single registry version ', async () => {
    const result = await getRegistry('psammead-caption');
    expect(result).toEqual('1.3.2');
  });

  it('returns default version when an array of versions is not returned', async () => {
    const result = await getRegistry('psammead-front-end-component');
    expect(result).toEqual('0.0.0');
  });

  it('returns -1 if the package does not match the whitelist', async () => {
    await expect(getRegistry('foobar')).rejects.toMatch('Wrong package name');
  });

  // Example name = 'psammead versions -json; echo I can inject code here; npm view psammead'
  // npm view psammead versions -json; echo I can inject code here; npm view psammead  versions -json
  it('should block the execution of exec if not in whiteliest ', async () => {
    const shell = jest.spyOn(RegClient, 'get');

    await expect(
      getRegistry(
        'psammead versions -json; echo I can inject code here; npm view psammead;',
      ),
    ).rejects.toMatch('Wrong package name');
    await expect(shell).toHaveBeenCalledTimes(0);
  });
});
