const { exec } = require('child_process');
const bumpPackages = require('.');

const packageVersionStub = `{ '@bbc/psammead-test-package': '1.0.1-alpha.4' }`;

jest.mock('../utilities/getPackages', () => () => [
  { name: '@bbc/psammead-test-package', location: '/psammead-test-package' },
]);

jest.mock('child_process', () => ({
  exec: jest.fn(),
}));

exec.mockImplementation((command, options, cb) => cb(null, packageVersionStub));

describe('bumpPackages', () => {
  it('should bump alpha versions correctly', async () => {
    await bumpPackages({
      packageNames: ['@bbc/psammead-test-package'],
      version: 'minor',
    });

    const command = exec.mock.calls[1][0];

    expect(exec).toHaveBeenCalledTimes(2);
    expect(command).toBe('yarn version prerelease');
  });
});
