const { exec } = require('child_process');
const removeExistingPackageLock = require('./removeExistingPackageLock');
const runNpmInstall = require('./runNpmInstall');

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

  it('should run npm install from the correct directory', async () => {
    runNpmInstall('/psammead/packages/components/psammead-brand');
    const [[command, { cwd }]] = exec.mock.calls;

    expect(command).toEqual('npm install');
    expect(cwd).toEqual('/psammead/packages/components/psammead-brand');
  });
});
