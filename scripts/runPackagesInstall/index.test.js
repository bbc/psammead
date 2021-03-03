const { exec } = require('child_process');
const runPackagesInstall = require('.');

jest.mock('child_process', () => ({
  exec: jest.fn(),
}));

beforeEach(jest.clearAllMocks);

describe('readFile', () => {
  it('should run yarn install from the correct directory', async () => {
    runPackagesInstall('/psammead/packages/components/psammead-brand');
    const [[command, { cwd }]] = exec.mock.calls;

    expect(command).toEqual('yarn install');
    expect(cwd).toEqual('/psammead/packages/components/psammead-brand');
  });
});
