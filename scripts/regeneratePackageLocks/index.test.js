const { exec } = require('child_process');
const removeExistingPackageLock = require('./removeExistingPackageLock');
const runPackagesInstall = require('./runPackagesInstall');

jest.mock('child_process', () => ({
  exec: jest.fn(),
}));

beforeEach(jest.clearAllMocks);

describe('readFile', () => {
  it('should remove the package-lock.json from the correct directory', async () => {
    removeExistingPackageLock('/psammead/packages/components/psammead-brand');
    const [[command, { cwd }]] = exec.mock.calls;

    expect(command).toEqual('rm -rf package-lock.json');
    expect(cwd).toEqual('/psammead/packages/components/psammead-brand');
  });

  it('should run yarn install from the correct directory', async () => {
    runPackagesInstall('/psammead/packages/components/psammead-brand');
    const [[command, { cwd }]] = exec.mock.calls;

    expect(command).toEqual('yarn install');
    expect(cwd).toEqual('/psammead/packages/components/psammead-brand');
  });
});
