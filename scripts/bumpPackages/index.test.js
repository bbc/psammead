const { exec } = require('child_process');
const bumpPackages = require('.');
const getVersionBumpCommitMessage = require('./getVersionBumpCommitMessage');

const packageVersionStub = `{ '@bbc/psammead-test-package': '1.0.1-alpha.4' }`;

jest.mock('../utilities/getPackages', () => () => ['/psammead-test-package']);

jest.mock('child_process', () => ({
  exec: jest.fn(),
}));

exec.mockImplementation((command, options, cb) => cb(null, packageVersionStub));

describe('bumpPackages', () => {
  it('should return the package bump commit message for multiple packages', () => {
    const actual = getVersionBumpCommitMessage([
      'psammead-brand',
      'psammead-image',
    ]);

    expect(actual).toEqual(`Bump package versions

Bump package versions for psammead-brand, psammead-image`);
  });

  it('should return the package bump commit message for one package', () => {
    const actual = getVersionBumpCommitMessage(['psammead-image']);

    expect(actual).toEqual('Bump package version for psammead-image');
  });

  it('should bump alpha versions correctly', async () => {
    await bumpPackages({
      packageNames: ['psammead-test-package'],
      version: 'minor',
    });

    const command = exec.mock.calls[1][0];

    expect(exec).toHaveBeenCalledTimes(2);
    expect(command).toBe(
      'yarn --no-git-tag-version version --new-version prerelease',
    );
  });
});
